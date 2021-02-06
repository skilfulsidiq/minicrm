<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Repositories\User\UserInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends BaseController
{
    public $employee;
     public function __construct(UserInterface $employee)
    {
        $this->middleware('auth');
        $this->middleware('company');
        $this->employee = $employee;
    }

    public function companyUserPage(){
        $employees = $this->employee->companyUsers(Auth::user()->company_id);
        return view('users.home',compact('employees'));
    }
    public function companyUserProfile(){
        
    }
}
