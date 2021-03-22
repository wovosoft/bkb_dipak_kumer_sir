<?php

namespace App\Http\Controllers;

use App\Models\DocumentType;
use Illuminate\Support\Facades\Route;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Throwable;

class DocumentTypeController extends Controller
{
    public static function routes()
    {
        Route::prefix("/document_types")->group(function () {
            Route::post("/", [self::class, 'index'])->name('index');
            Route::post("/store", [self::class, 'store'])->name('store');
            Route::post("/list", [self::class, 'list'])->name('list');
            Route::post("/delete/{document_type}", [self::class, 'delete'])->name('delete');
        });
    }

    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $request->validate([
                "title" => "required|string",
                "loan_type_id" => "required|numeric",
                "loan_sub_type_id" => "required|numeric",
                "is_mandatory" => "boolean|nullable"
            ]);
            $item = DocumentType::query()->findOrNew($request->post('id'));
            $item->forceFill([
                "title" => $request->post("title"),
                "loan_type_id" => $request->post("loan_type_id"),
                "loan_sub_type_id" => $request->post("loan_sub_type_id"),
                "is_mandatory" => $request->post("is_mandatory") ?? false,
            ]);
            $item->saveOrFail();
            DB::commit();
            return successResponse([
                "item" => $item
            ]);
        } catch (Throwable $exception) {
            DB::rollBack();
            throw $exception;
        }
    }

    public function delete(DocumentType $documentType, Request $request)
    {
        try {
            $documentType->delete();
            return successResponse();
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
