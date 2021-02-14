<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Role;
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
        $roles  = Role::notAdmin()->get(['id','role']);
        if($slug != null){
            $edit = true;
            $user = $this->employee->userDetail($slug);
        }
        $this->setPageTitle('Employees', $edit?'Update Employee':' Employee');
        // dd($companies);
        return view('admin.employee.form',compact('edit','companies','user','roles'));

    }
    public function storeOrUpdateEmployee(Request $request, $slug=null){
        $this->validate($request,['company_id'=>'required','role_id'=>'required',
            'name'=>'required','email'=>'required|email','password'=>'required',
        ]);
        $incomeingData = $request->only(['name','email','password','company_id','role_id']);
        $feedback = $this->employee->addOrUpdateUser($incomeingData, $slug);
         if (!$feedback['status']) {
            return $this->sendError('Error while updating employee',[$feedback['msg']]);
        }
       return $this->sendSuccess($feedback['data'],'Employee info updated');

    }
    public function removeEmployee($slug){
        $feedback = $this->employee->deleteUser($slug);
         if (!$feedback['status']) {
            return $this->sendError('Error while deleting employee',[$feedback['msg']]);
        }
        return $this->sendSuccess($feedback['data'],'Employee info deleted');
    }
}
