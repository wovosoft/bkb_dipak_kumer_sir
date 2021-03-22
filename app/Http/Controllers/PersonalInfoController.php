<?php

namespace App\Http\Controllers;

use App\Models\PersonalInfo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

class PersonalInfoController extends Controller
{
    public static function routes()
    {
        Route::prefix('/users/personal_info')
            ->name('users.personal_info.')
            ->group(function () {
                Route::post('/store', [self::class, 'store'])->name('store');
            });
    }

    public function store(Request $request): JsonResponse
    {
        \DB::beginTransaction();
        try {
            PersonalInfo::query()
                ->firstOrNew([
                    "user_id" => auth()->id(),
                ])
                ->forceFill([
                    "division_id" => $request->post('division_id'),
                    "district_id" => $request->post('district_id'),
                    "upazila_id" => $request->post('upazila_id'),
                    "thana" => $request->post('thana'),
                    "post_office" => $request->post('post_office'),
                    "post_code" => $request->post('post_code'),
                    "date_of_birth" => $request->post('date_of_birth'),
                    "nid" => $request->post('nid'),
                    "nationality" => $request->post('nationality'),
                    "first_name" => $request->post('first_name'),
                    "mid_name" => $request->post('mid_name'),
                    "last_name" => $request->post('last_name')
                ])
                ->saveOrFail();
            \DB::commit();
            return successResponse();
        } catch (\Throwable $exception) {
            \DB::rollBack();
            throw $exception;
        }
    }
}
