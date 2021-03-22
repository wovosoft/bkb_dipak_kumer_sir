<?php

namespace Database\Factories;

use App\Models\DivisionalOffice;
use Illuminate\Database\Eloquent\Factories\Factory;

class DivisionalOfficeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DivisionalOffice::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "name"=>$this->faker->word,
            "address"=>$this->faker->address
        ];
    }
}
