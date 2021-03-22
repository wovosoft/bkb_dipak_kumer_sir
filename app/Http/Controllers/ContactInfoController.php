<?php

namespace App\Http\Controllers;

use App\Models\ContactInfo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Throwable;

class ContactInfoController extends Controller
{
    public static function routes()
    {
        Route::prefix("/contacts")->name('contacts.')->group(function () {
            Route::post("/", [self::class, 'index'])->name('index');
            Route::post("/store", [self::class, 'store'])->name('store');
            Route::post("/list", [self::class, 'list'])->name('list');
            Route::post("/trash/{contactInfo}", [self::class, 'destroy'])->name('trash');
        });
    }

    public function store(Request $request): JsonResponse
    {
        DB::beginTransaction();
        try {
            $request->validate([
                "type" => ["required", "string"],
                "content" => ["required", "string"]
            ]);
            $item = ContactInfo::query()->findOrNew($request->post('id'));
            $item->forceFill([
                "user_id" => auth()->id(),
                "type" => $request->post('type'),
                "content" => $request->post('content')
            ]);
            $item->saveOrFail();
            DB::commit();
            return successResponse();
        } catch (Throwable $exception) {
            DB::rollBack();
            throw $exception;
        }
    }

    public function destroy(ContactInfo $contactInfo)
    {
        DB::beginTransaction();
        try {
            if ($contactInfo->user_id === auth()->id()) {
                $contactInfo->delete();
                DB::commit();
            }
            return successResponse();
        } catch (Throwable $exception) {
            DB::rollBack();
            throw $exception;
        }
    }

    public function list()
    {
        try {
            return ContactInfo::query()
                ->where('user_id', '=', auth()->id())
                ->get();
        } catch (Throwable $exception) {
            throw $exception;
        }
    }
}
