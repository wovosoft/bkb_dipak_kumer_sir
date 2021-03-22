<?php

use App\Http\Controllers\{AcademicInfoController,
    AdminController,
    BranchController,
    BranchLoanController,
    ContactInfoController,
    CrmRmOfficeController,
    DivisionalOfficeController,
    DocumentTypeController,
    LoanDetailController,
    LoanSubTypeController,
    LoanTypeController,
    PersonalInfoController,
    ProfessionalInfoController,
    RoleController,
    UserController
};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])
    ->name('Frontend.')
    ->group(function () {
        Route::get('/', function (Request $request) {
            if ($request->user()->can('is_admin')) {
                return redirect()->route('Admin.Index');
            }
            return redirect('/profile');
        })->name('Index');

        Route::get('/profile', [UserController::class, 'profile'])->name('Profile');
        Route::post('/profile/photo/upload', [UserController::class, 'photoUpload'])->name('Profile.photoUpload');
        Route::post('/get_loan_details', [BranchLoanController::class, 'getLoanDetails'])
            ->name('LoanDetails');

        ContactInfoController::routes();
        PersonalInfoController::routes();
        AcademicInfoController::routes();
        ProfessionalInfoController::routes();
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
        BranchController::routes();
        DivisionalOfficeController::routes();
        CrmRmOfficeController::routes();
        LoanTypeController::routes();
        LoanSubTypeController::routes();
        DocumentTypeController::routes();
    });
Route::prefix('backend')
    ->name('backend.')
    ->middleware(['auth'])
    ->group(function () {
        LoanDetailController::routes();
        Route::post('file_upload', [AdminController::class, 'fileUpload'])
            ->name('file_upload');
    });


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__ . '/auth.php';
