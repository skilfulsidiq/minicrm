<?php 
namespace App\Repositories\User;

interface UserInterface{

    public function addOrUpdateUser($arr, $slug);
    public function deleteUser($slug);
    public function companyUsers($company_id);
    public function allUsers();
    public function paginatedUsers();
    public function userDetail($slug);
    
}