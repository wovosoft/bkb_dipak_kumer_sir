<?php

namespace Database\Factories;

use App\Models\ContactInfo;
use Illuminate\Database\Eloquent\Factories\Factory;

class ContactInfoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ContactInfo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $type = ['email', 'phone'][random_int(0, 1)];
        return [
            "type" => $type,
            "content" => $type === 'email' ? $this->faker->companyEmail : $this->faker->e164PhoneNumber
        ];
    }
}
