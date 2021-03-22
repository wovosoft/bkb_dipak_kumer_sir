<?php

namespace Database\Factories;

use App\Models\Branch;
use Illuminate\Database\Eloquent\Factories\Factory;

class BranchFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Branch::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "branch_name"=>$this->faker->sentence,
            "branch_code"=>$this->faker->countryCode,
            "routing_no"=>uniqid(),
            "address"=>$this->faker->address,
            "city"=>$this->faker->city,
            "zip"=>$this->faker->postcode
        ];
    }
}
