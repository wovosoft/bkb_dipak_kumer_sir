<?php

namespace App\Console\Commands;

use App\Models\LoanDetail;
use Illuminate\Console\Command;

class FakeBranchLoan extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fake:branch_loan {branch_id} {quantity?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generates Fake Branch Loan';

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
        $this->info("Creating " . ($this->argument('quantity') ?? 10) . " Loan Detail Items");
        LoanDetail::factory()
            ->count($this->argument('quantity') ?? 10)
            ->create([
                'branch_id' => $this->argument('branch_id')
            ]);
        $this->info("Successfully Generated Fake Data");
        return 0;
    }
}
