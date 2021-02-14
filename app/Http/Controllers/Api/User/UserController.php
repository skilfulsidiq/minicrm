<?php

namespace App\Http\Controllers\Api\User;

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
        $this->employee = $employee;
    }
    
    public function allCompanyEmployees(){
        $employees = $this->employee->companyUsers(Auth::user()->company_id);
        return $this->sendSuccess($employees,'All employye');
    }
    // public function employee(){
    //     $user = Auth::user();
    //     $company=$user->company;
    //     return view('users.profile',compact('user','company'));
    // }
    
}
