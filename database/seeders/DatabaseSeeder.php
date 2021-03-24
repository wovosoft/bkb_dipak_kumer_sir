<?php

namespace Database\Seeders;

use App\Assets\Utils;
use App\Models\AcademicInfo;
use App\Models\Blog\Comment;
use App\Models\Blog\Post;
use App\Models\ContactInfo;
use App\Models\FamilyMember;
use App\Models\PersonalInfo;
use App\Models\ProfessionalInfo;
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
            "name" => "User Only",
            "permissions" => Utils::$branchPermissions
        ]);

        User::factory()->create([
            "name" => "Admin",
            "email" => "admin@gmail.com",
            "password" => Hash::make("admin123456789"),
            "role_id" => $admin_role->id
        ]);
        $user = User::factory()->create([
            "name" => "User",
            "email" => "user@bkb.com",
            "password" => Hash::make("user123456789"),
            "role_id" => $branch_role->id
        ]);
        Artisan::call("import:geo");
        $this->fakeUserData($user);
        User::factory()
            ->count(50)
            ->create([
                "role_id" => $branch_role->id
            ])
            ->each(function (User $user) {
                $this->fakeUserData($user);
                Post::factory()
                    ->count(random_int(1, 10))
                    ->create([
                        "user_id" => $user->id
                    ])
                    ->each(function (Post $post) {
                        Comment::factory()
                            ->count(random_int(1, 5))
                            ->create([
                                "user_id" => $post->user_id,
                                "post_id" => $post->id
                            ]);
                    });
            });

    }

    private function fakeUserData(User $user)
    {
        AcademicInfo::factory()
            ->count(random_int(1, 5))
            ->create([
                "user_id" => $user->id
            ]);
        ContactInfo::factory()
            ->count(random_int(5, 10))
            ->create([
                'user_id' => $user->id
            ]);
        FamilyMember::factory()
            ->count(random_int(1, 5))
            ->create([
                'related_to' => $user->id
            ]);
        PersonalInfo::factory()
            ->create([
                'user_id' => $user->id
            ]);
        ProfessionalInfo::factory()
            ->count(random_int(1, 5))
            ->create([
                'user_id' => $user->id
            ]);
    }
}
