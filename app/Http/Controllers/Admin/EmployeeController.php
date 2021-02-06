<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Repositories\Company\CompanyInterface;
use App\Repositories\User\UserInterface;
use Illuminate\Http\Request;

class EmployeeController extends BaseController
{
      public $employee;
      public $company;
      
    public function __construct(UserInterface $employee,CompanyInterface $company)
    {
        $this->employee= $employee;
        $this->company = $company;
    }
    public function allEmployee(){
         $this->setPageTitle('Employees', 'All Employees');
         $users = $this->employee->allUsers();
         return view('admin.employee.index',compact('users'));
    }
        public function showEmployeeForm($slug=null){
        $edit = false;
        $user='';
        $companies = $this->company->allCompaniesNameOnly();
        if($slug != null){
            $edit = true;
            $user = $this->employee->userDetail($slug);
        }
        $this->setPageTitle('Employees', $edit?'Update Employee':' Employee');
        return view('admin.employee.form',compact('edit','companies','user'));

    }
    public function storeOrUpdateEmployee(Request $request, $slug=null){
        $this->validate($request,['name'=>'required','email'=>'required|email','password'=>'required',
        ]);
        $incomeingData = $request->only(['name','email','password']);
        $feedback = $this->employee->addOrUpdateUser($incomeingData, $slug);
         if (!$feedback['status']) {
            return $this->responseRedirectBack('Error while updating employee','error',true,true);
        }
        return $this->responseRedirect('admin.employee', 'Employee updated successfully' ,'success',false, false);

    }
    public function removeEmployee($slug){
        $feedback = $this->employee->deleteUser($slug);
         if (!$feedback['status']) {
            return $this->responseRedirectBack('Error while deleting employee','error',true,true);
        }
        return $this->responseRedirect('admin.employee', 'Employee deleted successfully' ,'success',false, false);
    }
}
