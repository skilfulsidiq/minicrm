<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\PropertyRequest;
use App\Models\PropertyType;
use App\Models\State;
use App\Repositories\Properties\PropertyInterface;
use App\Repositories\PropertyRequest\PropertyRequestInterface;
use App\Repositories\User\UserInterface;
use Barryvdh\DomPDF\PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminController extends BaseController
{
    public $profile;
    public $pro_request;
    public $property;
    public function __construct()
    {
        // $this->middleware('auth:admin');
            // $this->profile = $user;
            // $this->pro_request = $req;
            // $this->property=$property;
    }
    public function dashboard(){
        $this->setPageTitle('Dashboard', 'Analytic');
       
        return view('admin.dashboard',compact('data'));
    }

}
