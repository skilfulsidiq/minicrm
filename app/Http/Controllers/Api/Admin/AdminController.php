<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\PropertyRequest;
use App\Models\PropertyType;
use App\Models\State;
use App\Models\User;
use App\Repositories\Properties\PropertyInterface;
use App\Repositories\PropertyRequest\PropertyRequestInterface;
use App\Repositories\User\UserInterface;
use Barryvdh\DomPDF\PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminController extends BaseController
{
   
   
    public function dashboardApi(){
         $total_companies = Company::count();
        $total_users = User::notAdmin()->count();
        $data=['companies'=>$total_companies,'users'=>$total_users]   ;
        return $this->sendSuccess($data,'dashboard info');
    }
}
