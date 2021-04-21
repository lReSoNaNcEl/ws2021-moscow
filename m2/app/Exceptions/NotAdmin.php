<?php

namespace App\Exceptions;

use Exception;

class NotAdmin extends Exception {

    protected $code = 403;

    public function render($req ) {
        return response()->json(['Вы не администратор'], $this->code);
    }

}
