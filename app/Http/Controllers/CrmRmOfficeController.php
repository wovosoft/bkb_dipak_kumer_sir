<?php

namespace App\Http\Controllers;

use App\Assets\Datatable;
use App\Models\CrmRmOffice;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class CrmRmOfficeController extends Controller
{
    public static function routes()
    {
        Route::prefix("/crm_rm_offices")->group(function () {
            Route::post("/", [self::class, 'index'])->name('index');
            Route::post("/store", [self::class, 'store'])->name('store');
            Route::post("/list", [self::class, 'list'])->name('list');
        });
    }

    /**
     * @param Request $request
     * @return JsonResponse
     * @throws \Throwable
     */
    public function store(Request $request): JsonResponse
    {
        \DB::beginTransaction();
        try {
            $request->validate([
                "name" => "string|required",
                "divisional_office_id" => "numeric|required"
            ]);

            $item = CrmRmOffice::query()->findOrNew($request->post('id'));
            $item->forceFill([
                "name" => $request->post("name"),
                "divisional_office_id" => $request->post("divisional_office_id"),
            ]);
            $item->saveOrFail();

            \DB::commit();
            return successResponse();
        } catch (\Throwable $exception) {
            \DB::rollBack();
            throw $exception;
        }
    }

    /**
     * @param Request $request
     * @return LengthAwarePaginator
     * @throws \Throwable
     */
    public function index(Request $request): LengthAwarePaginator
    {
        try {
            $items = CrmRmOffice::query()
                ->with(['divisionalOffice:id,name']);
            if ($request->post('filter')) {
                $items
                    ->where('id', '=', $request->post('id'))
                    ->orWhere('name', 'like', '%' . $request->post('filter') . '%');
            }
            return Datatable::render($items);
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     * @throws \Throwable
     */
    public function destroy(Request $request): JsonResponse
    {
        \DB::beginTransaction();
        try {
            $request->validate([
                "id" => "required|numeric"
            ]);
            $item = CrmRmOffice::query()->findOrFail($request->post('id'));
            $item->delete();
            \DB::commit();
            return successResponse();
        } catch (\Throwable $exception) {
            \DB::rollBack();
            throw $exception;
        }
    }

    public function list(Request $request)
    {
        try {
            $request->validate([
                "divisional_office_id" => "nullable|numeric"
            ]);
            $items = CrmRmOffice::query()
                ->select(['id', 'name']);

            if ($request->post('divisional_office_id')) {
                $items->where('divisional_office_id', '=', $request->post('divisional_office_id'));
            }
            return $items->get();
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
