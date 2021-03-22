<?php

namespace Database\Seeders;

use App\Assets\Utils;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $admin_role = Role::factory()->create([
            "name" => "Admin",
            "permissions" => Utils::$adminPermissions
        ]);

        $branch_role = Role::factory()->create([
            "name" => "Branch",
            "permissions" => Utils::$branchPermissions
        ]);

        User::factory()->create([
            "name" => "Admin",
            "email" => "admin@gmail.com",
            "password" => Hash::make("admin123456789"),
            "branch_id" => 1,
            "role_id" => $admin_role->id
        ]);
        User::factory()->create([
            "name" => "User",
            "email" => "user@bkb.com",
            "password" => Hash::make("user123456789"),
            "branch_id" => 1,
            "role_id" => $branch_role->id
        ]);

        /*
                LoanType::factory(10)
                    ->create()
                    ->each(function($loanType){
                        LoanSubType::factory(5)->create([
                            "loan_type_id"=>$loanType->id
                        ])->each(function($loanSubType) use($loanType){
                            DocumentType::factory(5)
                            ->create([
                                "loan_type_id"=>$loanType->id,
                                "loan_sub_type_id"=>$loanSubType->id
                            ]);
                        });
                    });

                    DivisionalOffice::factory(random_int(1,20))
                    ->create()
                    ->each(function($divisionalOffice){
                        CrmRmOffice::factory(random_int(1,10))
                        ->create([
                            "divisional_office_id"=>$divisionalOffice->id
                        ])
                        ->each(function($crmRmOffice) use($divisionalOffice){
                            Branch::factory(random_int(1,10))
                            ->create([
                                "divisional_office_id"=>$divisionalOffice->id,
                                "crm_rm_office_id"=>$crmRmOffice->id
                            ]);
                        });
                    });
        */
        \Artisan::call('initial_bank_data:import');
//        Artisan::call("generate:fake_loan_types");
        Artisan::call("initial:loan_setup");
        Artisan::call("import:geo");

    }
}
