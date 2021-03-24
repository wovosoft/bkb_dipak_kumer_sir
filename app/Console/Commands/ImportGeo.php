<?php

namespace App\Console\Commands;

use App\Models\District;
use App\Models\Division;
use App\Models\Union;
use App\Models\Upazila;
use Illuminate\Console\Command;

class ImportGeo extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:geo';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
     */
    public function handle()
    {
        //divisions
        \DB::beginTransaction();
        $divisions = json_decode(\File::get(base_path('files/geo/divisions/divisions.json')));
        foreach ($divisions[2]->data as $division) {
            $div = new Division();
            $div->forceFill([
                "name" => $division->name,
                "bn_name" => $division->bn_name,
                "url" => $division->url
            ]);
            $div->saveOrFail();
        }


        $districts = json_decode(\File::get(base_path('files/geo/districts/districts.json')));
        foreach ($districts[2]->data as $district) {
            (new District())
                ->forceFill([
                    "division_id" => $district->division_id,
                    "name" => $district->name,
                    "bn_name" => $district->bn_name,
                    "lat" => $district->lat,
                    "lon" => $district->lon,
                    "url" => $district->url
                ])
                ->saveOrFail();
        }

        $upazilas = json_decode(\File::get(base_path('files/geo/upazilas/upazilas.json')));
        foreach ($upazilas[2]->data as $upazila) {
            (new Upazila())
                ->forceFill([
                    "district_id" => $upazila->district_id,
                    "name" => $upazila->name,
                    "bn_name" => $upazila->bn_name,
                    "url" => $upazila->url,
                ])
                ->saveOrFail();
        }
        $unions = json_decode(\File::get(base_path('files/geo/unions/unions.json')));
        foreach ($unions[2]->data as $union) {
            (new Union())
                ->forceFill([
                    "upazila_id" => $union->upazilla_id,
                    "name" => $union->name,
                    "bn_name" => $union->bn_name,
                    "url" => $union->url,
                ])
                ->saveOrFail();
        }
        \DB::commit();
        return 0;
    }
}
