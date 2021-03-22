<?php

namespace App\Http\Controllers;

use App\Assets\Datatable;
use App\Models\LoanDetail;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class BranchLoanController extends Controller
{
    public function getLoanDetails(Request $request): LengthAwarePaginator
    {
        try {
            return Datatable::render(
                LoanDetail::query()
                    ->when($request->post('filter'), function (Builder $builder) use ($request) {
                        $builder
                            ->where('id', '=', $request->post('id'))
                            ->orWhere('proprietor_name', 'like', '%' . $request->post('filter') . '%')
                            ->orWhere('loan_account_no', 'like', '%' . $request->post('filter') . '%');
                    })
                    ->when($request->input('company'), function (Builder $builder) use ($request) {
                        $builder->where(
                            'company',
                            'like',
                            '%' . $request->input('company') . '%'
                        );
                    })
                    ->when($request->input('sanction_date'), function (Builder $builder) use ($request) {
                        $builder->whereDate(
                            'sanction_date',
                            '=',
                            $request->input('sanction_date')
                        );
                    })
                    ->when($request->input('due_date'), function (Builder $builder) use ($request) {
                        $builder->whereDate(
                            'due_date',
                            '=',
                            $request->input('due_date')
                        );
                    })
                    ->when($request->input('starting_date'), function (Builder $builder) use ($request) {
                        $builder->whereDate(
                            'created_at',
                            '>=',
                            $request->input('starting_date')
                        );
                    })
                    ->when($request->input('ending_date'), function (Builder $builder) use ($request) {
                        $builder->whereDate(
                            'created_at',
                            '<=',
                            $request->input('ending_date')
                        );
                    })
                    ->with([
                        'branch:id,branch_name,branch_code',
                        'loanType:id,title',
                        'loanSubType:id,loan_type_id,title',
                        'documents'
                    ])
                    ->branchLevel()
            );
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
