<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;

class Authenticate {

    public function handle($req, Closure $next, ...$guards) {
        $token = $req->bearerToken();
        $user = User::where('token', $token)->first();
        if ($token && $user) {
            $req->user = $user;
            return $next($req);
        }
        else \response()->json(['error' => '403'], 403);
    }
}
