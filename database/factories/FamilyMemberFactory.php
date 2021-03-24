<?php

namespace Database\Factories;

use App\Models\FamilyMember;
use Illuminate\Database\Eloquent\Factories\Factory;

class FamilyMemberFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = FamilyMember::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "relation" => $this->faker->word,
            "first_name" => $this->faker->firstName,
            "mid_name" => $this->faker->firstName,
            "last_name" => $this->faker->lastName,
            "date_of_birth" => $this->faker->date('Y-m-d'),
            "nid" => random_int(1000, 20000),
            "nationality" => $this->faker->country,
            "gender" => $this->faker->title,
            "description" => $this->faker->word
        ];
    }
}
