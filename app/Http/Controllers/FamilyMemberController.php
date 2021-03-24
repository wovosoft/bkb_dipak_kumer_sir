<?php

namespace App\Http\Controllers;

use App\Models\FamilyMember;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class FamilyMemberController extends Controller
{
    public static function routes()
    {
        Route::prefix("/users/family_members")
            ->name("users.family_members.")
            ->group(function () {
                Route::post("/", [self::class, 'index'])->name('index');
                Route::post("/store", [self::class, 'store'])->name('store');
                Route::post("/delete/{familyMember}", [self::class, 'delete'])->name('delete');
            });
    }

    public function index(Request $request): JsonResponse
    {
        try {
            return response()->json(
                FamilyMember::query()
                    ->where('related_to', '=', auth()->id())
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
                "relation" => ["required", "string"],
                "first_name" => ["string", "nullable"],
                "mid_name" => ["string", "nullable"],
                "last_name" => ["string", "nullable"],
                "date_of_birth" => ["date", "nullable"],
                "nid" => ["string", "nullable"],
                "nationality" => ["string", "nullable"],
                "gender" => ["string", "nullable"],
                "photo" => ["string", "nullable"],
                "description" => ["string", "nullable"],
            ]);
            $item = FamilyMember::query()->findOrNew($request->post('id'));
            $item->forceFill([
                "related_to" => auth()->id(),
                "relation" => $request->post('relation'),
                "first_name" => $request->post('first_name'),
                "mid_name" => $request->post('mid_name'),
                "last_name" => $request->post('last_name'),
                "date_of_birth" => $request->post('date_of_birth'),
                "nid" => $request->post('nid'),
                "nationality" => $request->post('nationality'),
                "gender" => $request->post('gender'),
                "photo" => $request->post('photo'),
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

    public function delete(FamilyMember $familyMember): JsonResponse
    {
        try {
            $familyMember->delete();
            return successResponse();
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }

    public function photoUpload(Request $request)
    {
        try {
            $request->validate([
                "the_file" => ["required", "file", "image"]
            ]);
            return $request->file("the_file")->store('profile/family_members', 'public');
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
