<?php

namespace App\Http\Controllers;

use App\Assets\Datatable;
use App\Models\LoanType;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class LoanTypeController extends Controller
{
    public static function routes()
    {
        Route::prefix("/loan_types")->group(function () {
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
        DB::beginTransaction();
        try {
            $request->validate([
                "title" => "string|required",
            ]);

            $item = LoanType::query()->findOrNew($request->post('id'));
            $item->title = $request->post('title');
            $item->saveOrFail();

            DB::commit();
            return successResponse();
        } catch (\Throwable $exception) {
            DB::rollBack();
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
            $items = LoanType::query()
                ->select(['id', 'title'])
                ->when($request->post('filter'), function (Builder $builder) use ($request) {
                    $builder
                        ->where('id', '=', $request->post('id'))
                        ->orWhere('title', 'like', '%' . $request->post('filter') . '%');
                })
                ->with([
                    "subTypes:id,title,loan_type_id",
                    "subTypes.documentTypes:id,title,is_mandatory,loan_type_id,loan_sub_type_id"
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
            $item = LoanType::query()->findOrFail($request->post('id'));
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
            return LoanType::query()
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
