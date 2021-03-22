<?php

namespace App\Http\Controllers;

use App\Models\ProfessionalInfo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class ProfessionalInfoController extends Controller
{
    public static function routes()
    {
        Route::prefix("/users/professional_info")
            ->name("users.professional_info.")
            ->group(function () {
                Route::post("/", [self::class, 'index'])->name('index');
                Route::post("/store", [self::class, 'store'])->name('store');
                Route::post("/delete/{professionalInfo}", [self::class, 'delete'])->name('delete');
            });
    }

    public function index(Request $request): JsonResponse
    {
        try {
            return response()->json(
                ProfessionalInfo::query()
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
                "title" => ["required", "string"],
                "position" => ["string", "nullable"],
                "institution" => ["string", "nullable"],
                "starting_date" => ["date", "required"],
                "ending_date" => ["date", "nullable"],
                "description" => ["string", "nullable"],
            ]);
            $item = ProfessionalInfo::query()->findOrNew($request->post('id'));
            $item->forceFill([
                "user_id" => auth()->id(),
                "title" => $request->post('title'),
                "position" => $request->post('position'),
                "institution" => $request->post('institution'),
                "starting_date" => $request->post('starting_date'),
                "ending_date" => $request->post('ending_date'),
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

    public function delete(ProfessionalInfo $professionalInfo): JsonResponse
    {
        try {
            $professionalInfo->delete();
            return successResponse();
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
