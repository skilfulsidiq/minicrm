<?php 
namespace App\Repositories\User;

use App\Models\User;
use App\Repositories\BaseRepository;
use App\Repositories\User\UserInterface;

class UserRepository extends BaseRepository implements UserInterface{

     /**
     * Add or Update Company
     * @param $slug(optional)
     */
    public function addOrUpdateUser($arr, $slug){
        
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
        $users = User::where('company_id', $company_id)->orderBy('created_at','desc')->get();
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