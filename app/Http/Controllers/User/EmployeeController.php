<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Repositories\User\UserInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployeeController extends Controller
{
   

    public function employeePage(){
        $user = Auth::user();
        $company=$user->company;
        return view('users.employee',compact('user','company'));
    }
}
