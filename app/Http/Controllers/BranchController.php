<?php

namespace App\Http\Controllers;

use App\Assets\Datatable;
use App\Models\Branch;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class BranchController extends Controller
{
    public static function routes()
    {
        Route::prefix("/branches")->group(function () {
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
                "crm_rm_office_id" => "required|numeric",
                "divisional_office_id" => "required|numeric",
                "branch_name" => "required|string",
                "branch_code" => "required|string",
                "routing_no" => "string|nullable",
                "address" => "string|nullable",
                "city" => "string|nullable",
                "zip" => "string|nullable",
            ]);

            $item = Branch::query()->findOrNew($request->post('id'));
            $item->forceFill([
                "crm_rm_office_id" => $request->post("crm_rm_office_id"),
                "divisional_office_id" => $request->post("divisional_office_id"),
                "branch_name" => $request->post("branch_name"),
                "branch_code" => $request->post("branch_code"),
                "routing_no" => $request->post("routing_no"),
                "address" => $request->post("address"),
                "city" => $request->post("city"),
                "zip" => $request->post("zip"),
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
            $items = Branch::query()
                ->when($request->post('filter'), function (Builder $builder) use ($request) {
                    $builder
                        ->where('id', '=', $request->post('id'))
                        ->orWhere('branch_name', 'like', '%' . $request->post('filter') . '%')
                        ->orWhere('branch_code', 'like', '%' . $request->post('filter') . '%')
                        ->orWhere('routing_no', 'like', '%' . $request->post('filter') . '%')
                        ->orWhere('zip', 'like', '%' . $request->post('filter') . '%')
                        ->orWhere('city', 'like', '%' . $request->post('filter') . '%');
                })
                ->when($request->post('divisional_office_id'), function (Builder $builder) use ($request) {
                    $builder->where('divisional_office_id', '=', $request->post('divisional_office_id'));
                })
                ->when($request->post('crm_rm_office_id'), function (Builder $builder) use ($request) {
                    $builder->where('crm_rm_office_id', '=', $request->post('crm_rm_office_id'));
                })
                ->with([
                    'divisionalOffice:id,name',
                    'crmRmOffice:id,name'
                ]);

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
            $item = Branch::query()->findOrFail($request->post('id'));
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
                "crm_rm_office_id" => "numeric|nullable",
                "divisional_office_id" => "numeric|nullable"
            ]);
            return Branch::query()
                ->when($request->post('crm_rm_office_id'), function ($query) use ($request) {
                    $query->where('crm_rm_office_id', $request->post('crm_rm_office_id'));
                })
                ->when($request->post('divisional_office_id'), function ($query) use ($request) {
                    $query->where('divisional_office_id', $request->post('divisional_office_id'));
                })
                ->orderBy('branch_code', 'asc')
                ->get();
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
