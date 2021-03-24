<?php

namespace Database\Factories;

use App\Models\ProfessionalInfo;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProfessionalInfoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProfessionalInfo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "title" => $this->faker->sentence(3),
            "position" => $this->faker->jobTitle,
            "institution" => $this->faker->company,
            "starting_date" => $this->faker->date('Y-m-d'),
            "description" => $this->faker->text
        ];
    }
}
