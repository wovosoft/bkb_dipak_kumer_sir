<?php

namespace App\Http\Controllers;

use App\Assets\Datatable;
use App\Models\Role;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class RoleController extends Controller
{
    public static function routes()
    {
        Route::prefix('/roles')
            ->name('roles.')
            ->group(function () {
                Route::post('/', [self::class, 'index'])->name('list');
                Route::post('/store', [self::class, 'store'])->name('store');
            });
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function index(Request $request): LengthAwarePaginator
    {
        $items = Role::query()
            ->select([
                'id',
                'name',
                'permissions'
            ]);
        if ($request->post('filter')) {
            $items
                ->where('id', '=', $request->post('filter'))
                ->orWhere('name', 'LIKE', "%" . $request->post('filter') . "%");
        }
        return Datatable::render($items);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        \DB::beginTransaction();
        try {
            $item = Role::query()
                ->findOrNew($request->post('id'));
            $item->name = $request->post("name");
            $item->permissions = $request->post("permissions");
            $item->saveOrFail();

            \DB::commit();
            return successResponse();
        } catch (\Throwable $exception) {
            \DB::rollBack();
            throw $exception;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
