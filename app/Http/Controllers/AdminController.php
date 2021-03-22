<?php

namespace App\Http\Controllers;

use App\Assets\Utils;
use App\Models\Branch;
use App\Models\Role;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index(Request $request)
    {
        return view('welcome', [
            "settings" => [
                "user" => auth()->user()->only(['id', 'name']),
                "permissions" => [...Utils::$branchPermissions, ...Utils::$adminPermissions],
                "roles" => Role::select('id', 'name')->get(),
                "branches" => Branch::select('id', 'branch_name', 'branch_code')->get(),
                "branch" => auth()->user()->branch()->select([
                    "id", "crm_rm_office_id", "divisional_office_id",
                    "branch_name", "branch_code", "routing_no",
                    "address", "city", "zip"
                ])->first(),
            ]
        ]);
    }

    public function fileUpload(Request $request)
    {
        try {
            $request->validate([
                "the_file" => [
                    "required",
                    "file"
                ]
            ]);
            return $request->file('the_file')->store('loan_details', 'public');
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
