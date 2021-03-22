<?php

namespace App\Http\Controllers;

use App\Models\AcademicInfo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class AcademicInfoController extends Controller
{
    public static function routes()
    {
        Route::prefix("/users/academic_info")
            ->name("users.academic_info.")
            ->group(function () {
                Route::post("/", [self::class, 'index'])->name('index');
                Route::post("/store", [self::class, 'store'])->name('store');
                Route::post("/delete/{academicInfo}", [self::class, 'delete'])->name('delete');
            });
    }

    public function index(Request $request): JsonResponse
    {
        try {
            return response()->json(
                AcademicInfo::query()
                    ->where('user_id', '=', auth()->id())
                    ->get()
            );
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }

    public function store(Request $request): JsonResponse
    {
        DB::beginTransaction();
        try {
            $request->validate([
                "exam_name" => ["required", "string"],
                "board" => ["string", "nullable"],
                "institution" => ["string", "nullable"],
                "passing_year" => ["integer", "nullable"],
                "result" => ["numeric", "nullable"],
                "result_scale" => ["numeric", "nullable"],
                "description" => ["string", "nullable"],
            ]);
            $item = AcademicInfo::query()->findOrNew($request->post('id'));
            $item->forceFill([
                "user_id" => auth()->id(),
                "exam_name" => $request->post('exam_name'),
                "board" => $request->post('board'),
                "institution" => $request->post('institution'),
                "passing_year" => $request->post('passing_year'),
                "result" => $request->post('result'),
                "result_scale" => $request->post('result_scale'),
                "description" => $request->post('description'),
            ]);
            $item->saveOrFail();
            DB::commit();
            return successResponse();
        } catch (\Throwable $exception) {
            DB::rollBack();
            throw $exception;
        }
    }

    public function delete(AcademicInfo $academicInfo)
    {
        try {
            $academicInfo->delete();
            return successResponse();
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
