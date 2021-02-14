<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Repositories\User\UserInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends BaseController{

     public $user;
     public function __construct(UserInterface $user){
        $this->user = $user;
    }
     public function login(Request $request){
        $validator = Validator::make($request->all(),['email' => 'required|email','password' => 'required']);

        if ($validator->fails()) {
            return $this->sendError('Validation Error',[ $validator->errors()],403);
        }
        $all = $request->only(['email','password']);
        $ip = $request->getClientIp();
        $feedback = $this->user->login($all);
        if(!$feedback['status']){
            return $this->sendError('login failed',$feedback['msg']);
        }
        return $this->sendSuccess($feedback['data'],'login success');
    }
      public function forgot_password(Request $request){
        $validator = Validator::make($request->all(),['email' => 'required|email']);
        if ($validator->fails()) {
            return $this->sendError('Validation Error',[ $validator->errors()],403);
        }
        $only = $request->only(['email']);
        $user = $this->user->forgotPassword($only);
        if(!$user['res']){
            return $this->sendError('failed',[$user['msg']]);
        }
        return $this->sendSuccess('success', $user['msg']);
    }

    public function changePasswordUsingCode(Request $request){
        $validator = Validator::make($request->all(),['code' => 'required|min:6','email'=>'required|email','password'=>'required|min:6' ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error',[ $validator->errors()],403);
        }
        $only = $request->only(['email','code','password']);
        $user = $this->user->changePasswordByCode($only);
        if(!$user['res']){
            return $this->sendError('failed',[$user['msg']]);
        }
        return $this->sendSuccess('success', $user['msg']);
    }
}

