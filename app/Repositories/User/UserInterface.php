<?php 
namespace App\Repositories\User;

interface UserInterface{

      public function addOrUpdateUser($arr, $slug);
    public function deleteUser($slug);
    public function allUsers();
    
}