<?php 
namespace App\Repositories\User;

use App\Models\User;
use App\Repositories\BaseRepository;
use App\Repositories\User\UserInterface;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserRepository extends BaseRepository implements UserInterface{

    public function login($array){
        $tokenword = $array['email'].Carbon::now().$array['password'];
         $feedback=[];
        $user = User::where('email', $array['email'])->first();
        if($user){
             $company = $user->company;
             $role = $user->role;
                if(Hash::check($array['password'],$user->password)){
                    Auth::login($user);
                    $user->save();
                    $token =$user->createToken($tokenword);
                    // $lender = Lender::where(['id' => $user->lenderid])->first();
                    // $data = ['user' => $user, 'token' => $token->plainTextToken];
                    $data = ['user' =>$user,'role'=>$role,'company'=>$company,'token' => $token->plainTextToken];
                    return $this->success('LoggedIn Successfull',$data);
                } else {
                    return $this->fail('invalid email or password');
              }
        }else{
            return $this->fail('Account does not exist');

        }
    }
     public function forgotPassword($arr){
        $status=[];
        $email = $arr['email'];
        $user = User::where(['email'=>$email])->first();
        $verify_code = mt_rand(100000, 999999);
		if(!empty($user)){
            $user->verify_code = $verify_code;
            $user->save();
            $when = Carbon::now()->addMinutes(1);
            try {
                $user->notify(new ForgotPasswordNotification($user));
                // Mail::to($user->email)->send(new ForgotPasswordMail($user,$user->verify_code));//to user
                $status['msg'] ='An email has been sent to '. $user->email;
                $status['res'] = true;
                return $status;

            } catch (\Exception $e) {
                Log::debug('forgot mail: '.$e->getMessage());
                $status['msg'] = 'Error sending mail, try again or contact your admin';
                $status['res'] = false;
                return $status;

                }


        }
        $status['msg'] = 'This account does not exist';
        $status['res'] = false;
        return $status;
    }

    public function changePasswordByCode($arr){
        $status=[];
        $code = $arr['code'];
        $email = $arr['email'];
        $user = User::where(['email'=>$email])->first();
		if(!empty($user)){
            if($code == $user->verify_code){
                $user->password = $arr['password'];
                $user->save();
                $status['msg'] ='password changed successfully';
                $status['result'] =$user;
                $status['res'] = true;
                return $status;
		    }else{
                $status['msg'] ='Invalid code, Enter the exact code sent to your mail';
                $status['res'] = false;
                return $status;
		    }

        }
        $status['msg'] ='user does not exist';
        $status['res'] = false;
        return $status;
    }
    public function changePasswordByAuth($arr,$user_id){
        $user = User::where('id',$user_id)->first();
        if(!empty($user)){
            $hashedOldPassword = $user->password;
            if(Hash::check($arr['old_password'],$hashedOldPassword)){
                if(!Hash::check($arr['password'],$hashedOldPassword)){
                    $user->password = $arr['password'];
                    $user->save();
                    return $this->success('password changed successfully',$user);
                }else{
                    return $this->fail('New password cannot be old password');
                }
            }else{
                return $this->fail('old password does not matched','change password by auth');
            }
        }
        return $this->fail('unable to update password, try again');
    }
     /**
     * Add or Update Company
     * @param $slug(optional)
     */
    public function addOrUpdateUser($arr, $slug){
        // return $arr;
        $user = User::updateOrCreate(['slug'=>$slug],$arr);
        if(!$user){
            return $this->fail('Cannot Add or Update user','AddUser');
        }
        return $this->success('Company updated successfully', $user);
    }
    /**
     * delte Company
     * @param slug
     */
    public function deleteUser($slug){
         $user = User::where('slug', $slug)->first();
        if($user->delete()){
            return $this->success('User deleted successfully', $user);
        }
        return $this->fail('Error deleting user','DeleteUser');
        
    }
    /**
     * Company user
     * @param $company_id
     */
    public function companyUsers($company_id){
        $users = User::with('company')->where('company_id', $company_id)->orderBy('created_at','desc')->get();
        return $users;
    }
    /**
     * List of Companies
     */
    public function allUsers(){
        return User::with('company','role')->notAdmin()->orderBy('created_at','desc')->get();
    }
    public function paginatedUsers(){
        return User::with('company','role')->notAdmin()->orderBy('created_at','desc')->paginate(5);
    }
    public function userDetail($slug){
        return User::where('slug', $slug)->firstOrFail();
    }
   
}