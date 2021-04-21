<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\Role;
use Illuminate\Testing\Fluent\Concerns\Has;
use Illuminate\Validation\Rule;

class UserController extends Controller {

    public function create(Request $req) {
        $v = Validator::make($req->all(), [
            'email' => 'required|email|unique:users',
            'password' => 'required|max:255',
            'role' => ['required', Rule::in(['admin', 'chef', 'waiter'])]
        ]);
        if ($v->fails()) return $v->errors();

        $user = User::create([
            'email' => $req->email,
            'password' => Hash::make($req->password),
            'role' => $req->role
        ]);

        return $user;
    }

    public function getAll(Request $req) {
        return User::all();
    }

}
