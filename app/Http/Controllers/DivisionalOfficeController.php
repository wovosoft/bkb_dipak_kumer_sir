<?php

namespace App\Http\Controllers;

use App\Assets\Datatable;
use App\Models\DivisionalOffice;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class DivisionalOfficeController extends Controller
{
    public static function routes()
    {
        Route::prefix("/divisional_offices")->group(function () {
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
                "address" => "string|nullable"
            ]);

            $item = DivisionalOffice::query()->findOrNew($request->post('id'));
            $item->forceFill([
                "name" => $request->post("name"),
                "address" => $request->post("address"),
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
            $items = DivisionalOffice::query();
            if ($request->post('filter')) {
                $items
                    ->where('id', '=', $request->post('id'))
                    ->orWhere('name', 'like', '%' . $request->post('filter') . '%')
                    ->orWhere('address', 'like', '%' . $request->post('filter') . '%');
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
            $item = DivisionalOffice::query()->findOrFail($request->post('id'));
            $item->delete();
            \DB::commit();
            return successResponse();
        } catch (\Throwable $exception) {
            \DB::rollBack();
            throw $exception;
        }
    }

    /**
     * There are only 11 divisional offices of BKB,
     * so no need to apply filter options, rather
     * all the available divisional offices can be sent at once as response.
     * @param Request $request
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     * @throws \Throwable
     */
    public function list(Request $request)
    {
        try {
            return DivisionalOffice::query()
                ->select(['id', 'name'])
                ->get();
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
