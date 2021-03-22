<?php

namespace App\Http\Controllers;

use App\Assets\Datatable;
use App\Models\Document;
use App\Models\LoanDetail;
use App\Models\LoanType;
use Carbon\Carbon;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class LoanDetailController extends Controller
{
    public static function routes()
    {
        Route::prefix("/loan_details")
            ->name('loan_details.')
            ->group(function () {
                Route::post("/", [self::class, 'index'])->name('index');
                Route::post("/store", [self::class, 'store'])->name('store');
                Route::get("/export/{loan_detail}", [self::class, 'export'])->name('export');
                Route::post("/list", [self::class, 'list'])->name('list');
                Route::post("/document_types", [self::class, 'documentTypes'])->name('documentTypes');
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
                "branch_id" => "numeric|required",
                "loan_type_id" => "numeric|required",
                "loan_sub_type_id" => "numeric|required",
                "company" => "string|required",
                "proprietor_name" => "string|required",
                "sanction_amount" => "numeric|required|min:0",
                "sanction_date" => "date|date_format:Y-m-d",
                "due_date" => "date|date_format:Y-m-d|nullable",
                "loan_account_no" => "string|required",
                "description" => "nullable|string",
                "documents" => "array|min:0",
                "documents.*.filepath" => "required|string",
                "documents.*.loan_type_id" => "required|numeric",
                "documents.*.loan_sub_type_id" => "required|numeric",
            ]);

            $item = LoanDetail::query()->findOrNew($request->post('id'));
            $item
                ->forceFill([
                    "branch_id" => $request->post("branch_id"),
                    "loan_type_id" => $request->post("loan_type_id"),
                    "loan_sub_type_id" => $request->post("loan_sub_type_id"),
                    "company" => $request->post("company"),
                    "proprietor_name" => $request->post("proprietor_name"),
                    "sanction_amount" => $request->post("sanction_amount") ?? 0,
                    "sanction_date" => $request->post("sanction_date") ?? Carbon::now()->format('Y-m-d'),
                    "due_date" => $request->post("sanction_date"),
                    "loan_account_no" => $request->post("loan_account_no"),
                    "description" => $request->post("description"),
                ])
                ->saveOrFail();
            foreach ($request->post('documents') as $doc) {
                $document = Document::query()->findOrNew(isset($doc['id']) ? $doc['id'] : null);
                $document->forceFill([
                    "loan_type_id" => $item->loan_type_id,
                    "loan_sub_type_id" => $item->loan_sub_type_id,
                    "loan_detail_id" => $item->id,
                    "filepath" => $doc['filepath'],
                    "description" => $doc['description']
                ]);
                $document->saveOrFail();
            }
            \DB::commit();
            return successResponse();
        } catch (\Throwable $exception) {
            \DB::rollBack();
            throw $exception;
        }
    }

    private function loanDetail(Request $request)
    {
        return LoanDetail::query()
            ->when($request->post('loan_type_id'), function (Builder $builder) use ($request) {
                $builder->where('loan_type_id', '=', $request->post('loan_type_id'));
            })
            ->when($request->post('loan_sub_type_id'), function (Builder $builder) use ($request) {
                $builder->where('loan_sub_type_id', '=', $request->post('loan_sub_type_id'));
            })
            ->when($request->post('sanction_date'), function (Builder $builder) use ($request) {
                $builder->where('sanction_date', 'LIKE', $request->post('sanction_date') . "%");
            })
            ->when($request->post('due_date'), function (Builder $builder) use ($request) {
                $builder->where('due_date', 'LIKE', $request->post('due_date') . "%");
            })
            ->when($request->post('filter'), function (Builder $builder) use ($request) {
                $builder
                    ->where('id', '=', $request->post('id'))
                    ->orWhere('company', 'like', '%' . $request->post('filter') . '%')
                    ->orWhere('proprietor_name', 'like', '%' . $request->post('filter') . '%')
                    ->orWhere('sanction_date', 'like', '%' . $request->post('filter') . '%')
                    ->orWhere('due_date', 'like', '%' . $request->post('filter') . '%')
                    ->orWhere('loan_account_no', 'like', '%' . $request->post('filter') . '%');
            })
            ->with([
                'branch:id,branch_name,branch_code',
                'loanType:id,title',
                'loanSubType:id,loan_type_id,title',
                'documents'
            ]);
    }

    /**
     * @param Request $request
     * @return LengthAwarePaginator
     * @throws \Throwable
     */
    public function index(Request $request): LengthAwarePaginator
    {
        try {
            return Datatable::render($this->loanDetail($request));
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
            $item = LoanDetail::query()->findOrFail($request->post('id'));
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
            $items = LoanDetail::query()
                ->select(['id', 'name']);

            if ($request->post('divisional_office_id')) {
                $items->where('divisional_office_id', '=', $request->post('divisional_office_id'));
            }
            return $items->get();
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }

    public function documentTypes()
    {
        return LoanType::query()
            ->select([
                'id',
                'title'
            ])
            ->with([
                "subTypes:id,loan_type_id,title",
                "subTypes.documentTypes:id,loan_type_id,loan_sub_type_id,title,is_mandatory"
            ])
            ->get();
    }

    public function export($loanDetail, Request $request)
    {
        return \PDF::loadView('pdf.loan_detail', [
            "item" => $this->loanDetail($request)->where('id', $loanDetail)->first()
        ])
            ->stream('loan_detail.pdf');
    }
}
