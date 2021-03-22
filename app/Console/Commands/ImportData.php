<?php

namespace App\Console\Commands;

use App\Models\Branch;
use App\Models\CrmRmOffice;
use App\Models\DivisionalOffice;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class ImportData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'initial_bank_data:import';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Imports Initial Bank Data';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     * @throws \Throwable
     */
    public function handle()
    {
        $divisional_offices = json_decode(File::get(storage_path('app/files/divisonal_offices.json')));
        $crm_rm_offices = collect(json_decode(File::get(storage_path('app/files/crm_rm_offices.json'))))
            ->groupBy('under_divisional_office');

        $branches = collect(json_decode(File::get(storage_path('app/files/branches.json'))))
            ->groupBy('under_crm_rm_office');

        foreach ($divisional_offices as $divisional_office) {
            $do = (new DivisionalOffice())
                ->forceFill([
                    "name" => $divisional_office->divisional_office_name,
                    "address" => $divisional_office->divisional_office_name
                ]);
            $do->saveOrFail();

            foreach ($crm_rm_offices->get($divisional_office->id) as $cmo) {
                $cro = new CrmRmOffice();
                $cro->forceFill([
                    "divisional_office_id" => $do->id,
                    "name" => $cmo->crm_rm_office_name
                ]);
                $cro->saveOrFail();
                foreach ($branches->get($cmo->id) as $bo) {
                    $bro = new Branch();
                    $bro->forceFill([
                        "crm_rm_office_id" => $cro->id,
                        "divisional_office_id" => $do->id,
                        "branch_name" => $bo->branch_name,
                        "branch_code" => sprintf('%04d', $bo->branch_code),
                    ]);
                    $bro->saveOrFail();
                }
            }
        }
        $this->info("Divisional Offices, CRM-RM Offices and Branches are imported successfully.");
        return 0;
    }
}
