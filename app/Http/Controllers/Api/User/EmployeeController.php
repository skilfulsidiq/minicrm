<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Repositories\User\UserInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployeeController extends BaseController
{
   

    public function employeePage(){
        $user = Auth::user();
        $company=$user->company;
        // return $this->sendSuccess()
    }
}
