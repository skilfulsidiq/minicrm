<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Repositories\Company\CompanyInterface;
use App\Repositories\User\UserInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GeneralController extends BaseController
{
  
    public $company;
     public function __construct(UserInterface $employee, CompanyInterface $company){
      
         $this->company = $company;
     }

     public function allCompanies(){
           $companies = $this->company->paginatedCompanies();
           return $this->sendSuccess($companies,'All Companies');
     }

     
}
