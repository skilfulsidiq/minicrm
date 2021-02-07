<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Repositories\User\UserInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GeneralController extends BaseController
{
    public $employee;
     public function __construct(UserInterface $employee){
         $this->employee = $employee;
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
