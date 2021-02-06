<?php 
namespace App\Repositories\Company;

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
        if(!$user->delete()){
            return $this->success('User deleted successfully', $user);
        }
        return $this->fail('Error deleting user','DeleteUser');
        
    }
    /**
     * Company user
     * @param $company_id
     */
    public function companyUsers($company_id){
        $users = User::where('company_id', $company_id)->get();
        return $users;
    }
    /**
     * List of Companies
     */
    public function allUsers(){
        return User::paginate(5);
    }

    /**
     * User update their profile
     * @param $slug
     */
   
}