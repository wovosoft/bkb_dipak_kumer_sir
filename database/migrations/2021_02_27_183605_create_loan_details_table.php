<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoanDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loan_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('branch_id');
            $table->string('company');
            $table->string('proprietor_name');
            $table->double('sanction_amount')->default(0);
            $table->date('sanction_date')->nullable();
            $table->date('due_date')->nullable();
            $table->string('loan_account_no')->nullable();

            $table->unsignedBigInteger('loan_type_id');
            $table->unsignedBigInteger('loan_sub_type_id');


            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('loan_details');
    }
}
