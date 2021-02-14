<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Repositories\User\UserInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends BaseController
{
    public $employee;
     public function __construct(UserInterface $employee)
    {
        // $this->middleware('auth');
        $this->employee = $employee;
    }
    
    public function allCompanyEmployees($company_id){
        $employees = $this->employee->companyUsers($company_id);
        return $this->sendSuccess($employees,'All employess');
    }
    public function updateProfile(Request $request,$slug){
         $validator = Validator::make($request->all(),['email' => 'required|email','name' => 'required']);

        if ($validator->fails()) {
            return $this->sendError('Validation Error',[ $validator->errors()],403);
        }
         $incomingData = $request->only(['name','email']);
        if($request['password'] != null){
            $incomingData['password'] = $request['password'];
        }
        $feedback = $this->employee->addOrUpdateUser($incomingData,$slug);
        if(!$feedback['status']){
            return $this->sendError('profile update failed',$feedback['msg']);
        }
        return $this->sendSuccess($feedback['data'],'profile updated success');
     }

    
}
