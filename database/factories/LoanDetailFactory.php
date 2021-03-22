<?php

namespace Database\Factories;

use App\Models\LoanDetail;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class LoanDetailFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = LoanDetail::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $date = $this->faker->date("Y-m-d");
        return [
            "branch_id" => 1,
            "company" => $this->faker->company,
            "proprietor_name" => $this->faker->name,
            "sanction_amount" => $this->faker->randomFloat(2, 10000, 50000),
            "sanction_date" => $date,
            "due_date" => Carbon::parse($date)->addMonths(random_int(1, 12))->format("Y-m-d"),
            "loan_account_no" => $this->faker->uuid,
            "loan_type_id" => random_int(1, 10),
            "loan_sub_type_id" => random_int(1, 10),
            "description" => $this->faker->text
        ];
    }
}
