<?php 
namespace App\Repositories\User;

interface UserInterface{

    public function login($arr);
    public function forgotPassword($arr);
    public function changePasswordByCode($arr);
    public function changePasswordByAuth($arr,$user_id);
    
    public function addOrUpdateUser($arr, $slug);
    public function deleteUser($slug);
    public function companyUsers($company_id);
    public function allUsers();
    public function paginatedUsers();
    public function userDetail($slug);
    
}