<?php

namespace App\Http\Middleware;

use Closure;
use App\Exceptions\NotAdmin;

class Admin {

    public function handle($req, Closure $next, ...$guards)
    {
        if ($req->user->role === 'admin')
            return $next($req);
        throw new NotAdmin('dad');
    }

}
