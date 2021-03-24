<?php

namespace App\Http\Controllers;

use App\Assets\Datatable;
use App\Models\Division;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

class UserController extends Controller
{
    public static function routes()
    {
        Route::prefix('/users')
            ->name('users.')
            ->group(function () {
                Route::post('/', [self::class, 'index'])->name('list');
                Route::post('/store', [self::class, 'store'])->name('store');
            });
    }

    public function index(Request $request): LengthAwarePaginator
    {
        return Datatable::render(
            User::query()
                ->select([
                    'id',
                    'name',
                    'profile_photo',
                    'role_id',
                    'email',
                    'created_at',
                    'updated_at'
                ])
                ->when($request->post('filter'), function ($users) use ($request) {
                    $users->where('id', '=', $request->post('filter'))
                        ->orWhere('name', 'LIKE', "%" . $request->post('filter') . "%")
                        ->orWhere('email', 'LIKE', "%" . $request->post('filter') . "%");
                })
                ->with([
                    'role:id,name',
                    'personalInfo.division',
                    'personalInfo.district',
                    'personalInfo.upazila',
                    'academicInfo',
                    'contactInfo',
                    'professionalInfo',
                    'familyMembers',

                ])
        );
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        \DB::beginTransaction();
        try {
            $request->validate([
                "id" => [
                    "numeric"
                ],
                "name" => [
                    "required",
                    "string"
                ],
                "email" => [
                    "required",
                    "email"
                ],
                "password" => [
                    "min:6"
                ],
                "role_id" => "required|numeric",
            ]);
            $item = User::query()->findOrNew($request->post('id'));
            $item->forceFill($request->only(['name', 'email', 'role_id']));
            if ($request->has('password') && $request->post('password')) {
                $item->password = Hash::make($request->post('password'));
            }
            $item->saveOrFail();
            \DB::commit();
            return response()->json([
                "title" => "Success",
                "variant" => "success",
                "message" => "Successfully Done",
            ]);

        } catch (\Throwable $exception) {
            \DB::rollBack();
            throw $exception;
        }
    }

    public function profile(Request $request)
    {
        return view('user_profile', [
            "user" => auth()->user(),
            "personal_info" => auth()
                ->user()
                ->personalInfo()
                ->select(["division_id",
                    "district_id",
                    "upazila_id",
                    "thana",
                    "post_office",
                    "post_code",
                    "date_of_birth",
                    "nid",
                    "nationality",
                    "first_name",
                    "mid_name",
                    "last_name"
                ])
                ->first(),
            "geo" => Division::query()
                ->select([
                    'id',
                    'name'
                ])
                ->with([
                    'districts' => function (HasMany $builder) {
                        $builder->select(['id', 'division_id', 'name'])->orderBy('name');
                    },
                    'districts.upazilas' => function (HasMany $builder) {
                        $builder->select(['id', 'district_id', 'name'])->orderBy('name');
                    }
                ])
                ->orderBy('name', 'asc')
                ->get()
        ]);
    }

    public function photoUpload(Request $request)
    {
        try {
            $request->validate([
                "the_file" => "required|file"
            ]);
            $url = $request->file('the_file')->store('profile/photos', 'public');
            $user = User::query()->find(auth()->id());
            $user->profile_photo = $request->file('the_file')->store('profile/photos', 'public');
            $user->saveOrFail();
            return successResponse([
                "url" => url('storage/' . $url)
            ]);
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
