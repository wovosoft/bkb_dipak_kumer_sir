<?php

namespace Database\Factories;

use App\Models\PersonalInfo;
use Illuminate\Database\Eloquent\Factories\Factory;

class PersonalInfoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PersonalInfo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "first_name" => $this->faker->title,
            "mid_name" => $this->faker->firstName,
            "last_name" => $this->faker->lastName,
            "date_of_birth" => $this->faker->date('Y-m-d'),
            "nid" => random_int(1000, 10000),
            "nationality" => $this->faker->country,
            "division_id" => random_int(1, 6),
            "thana" => $this->faker->word,
            "post_office" => $this->faker->word,
            "post_code" => $this->faker->postcode,
            "fathers_name" => $this->faker->firstNameMale,
            "mothers_name" => $this->faker->firstNameFemale,
            "spouse_name" => $this->faker->firstNameFemale,
            "gender" => $this->faker->randomElement(['male', 'female']),
        ];
    }
}
