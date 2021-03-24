<?php

use App\Http\Controllers\{AcademicInfoController,
    AdminController,
    ContactInfoController,
    FamilyMemberController,
    PersonalInfoController,
    PostController,
    ProfessionalInfoController,
    RoleController,
    UserController
};
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])
    ->name('Frontend.')
    ->group(function () {
        Route::get('/', [PostController::class, 'index'])->name('Index');
        Route::get('/posts/{post}/{slug}', [PostController::class, 'show'])->name('Post.Show');
        Route::get('/profile', [UserController::class, 'profile'])->name('Profile');
        Route::post('/profile/photo/upload', [UserController::class, 'photoUpload'])->name('Profile.photoUpload');
        Route::post('/family_member/photo/upload', [FamilyMemberController::class, 'photoUpload'])->name('FamilyMember.photoUpload');


        ContactInfoController::routes();
        PersonalInfoController::routes();
        AcademicInfoController::routes();
        ProfessionalInfoController::routes();
        FamilyMemberController::routes();
    });


Route::get('/admin', [AdminController::class, 'index'])
    ->middleware(['auth', 'admin'])
    ->name('Admin.Index');

//backend routes to fetch json data from database
Route::prefix('backend')
    ->name('backend.')
    ->middleware(['auth', 'admin'])
    ->group(function () {
        UserController::routes();
        RoleController::routes();
    });
Route::prefix('backend')
    ->name('backend.')
    ->middleware(['auth'])
    ->group(function () {
        Route::post('file_upload', [AdminController::class, 'fileUpload'])
            ->name('file_upload');
    });


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__ . '/auth.php';
