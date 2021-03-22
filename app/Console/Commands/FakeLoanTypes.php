<?php

namespace App\Console\Commands;

use App\Models\DocumentType;
use App\Models\LoanSubType;
use App\Models\LoanType;
use Illuminate\Console\Command;

class FakeLoanTypes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:fake_loan_types';

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
     * @throws \Exception
     */
    public function handle()
    {
        LoanType::factory(10)
            ->create()
            ->each(function (LoanType $loanType) {
                LoanSubType::factory(random_int(1, 10))
                    ->create([
                        "loan_type_id" => $loanType->id
                    ])
                    ->each(function (LoanSubType $loanSubType) use ($loanType) {
                        DocumentType::factory(random_int(1, 10))
                            ->create([
                                "loan_type_id" => $loanType->id,
                                "loan_sub_type_id" => $loanSubType->id
                            ]);
                    });
            });
        return 0;
    }
}
