<?php

namespace App\Http\Controllers;

use App\Models\LoanSubType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class LoanSubTypeController extends Controller
{
    public static function routes()
    {
        Route::prefix("/loan_sub_types")->group(function () {
            Route::post("/", [self::class, 'index'])->name('index');
            Route::post("/store", [self::class, 'store'])->name('store');
            Route::post("/list", [self::class, 'list'])->name('list');
            Route::post("/delete/{loanSubType}", [self::class, 'delete'])->name('delete');
        });
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        \DB::beginTransaction();
        try {
            $request->validate([
                "id" => "numeric|nullable",
                "loan_type_id" => "required|numeric",
                "title" => "string|required"
            ]);
            $item = LoanSubType::query()->findOrNew($request->post('id'));
            $item->title = $request->post("title");
            $item->loan_type_id = $request->post("loan_type_id");
            $item->saveOrFail();
            \DB::commit();
            return successResponse([
                "item" => LoanSubType::query()->with('documentTypes')->find($item->id)
            ]);
        } catch (\Throwable $exception) {
            \DB::rollBack();
            throw $exception;
        }
    }

    public function delete(LoanSubType $loanSubType, Request $request)
    {
        try {
            $loanSubType->delete();
            return successResponse();
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
