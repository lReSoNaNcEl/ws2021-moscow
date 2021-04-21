<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Str;

class AuthController extends Controller {

    public function login(Request $req) {
        $validated = Validator::make($req->all(), [
            'email' => 'required|exists:users|email',
            'password' => 'required|max:255'
        ]);
        if ($validated->fails()) return $validated->errors();

        $user = User::where('email', $req->email)->first();

        if (!Hash::check($req->password, $user->password) || !$user) {
            return 'error';
        }

        $token = Str::random(50);
        User::where('email', $req->email)->update(['token' => $token]);
        return ['token' => $token];
    }

    public function logout() {

    }

}
