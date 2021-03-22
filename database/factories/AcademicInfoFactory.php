<?php

namespace Database\Factories;

use App\Models\AcademicInfo;
use Illuminate\Database\Eloquent\Factories\Factory;

class AcademicInfoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = AcademicInfo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "user_id" => random_int(1, 5),
            "exam_name" => $this->faker->word,
            "board" => $this->faker->word,
            "institution" => $this->faker->word,
            "passing_year" => $this->faker->year,
            "result" => random_int(0, 5),
            "result_scale" => 5,
            "description" => $this->faker->text,
            "documents" => null
        ];
    }
}
