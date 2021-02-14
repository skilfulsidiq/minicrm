<?php

namespace App\Http\Controllers;

use App\Repositories\Company\CompanyInterface;
use Illuminate\Http\Request;

class GeneralController extends Controller
{
    public $company;
    public function __construct(CompanyInterface $company)
    {
        $this->company= $company;
    }
    public function welcomePage(){
        $companies = $this->company->paginatedCompanies();
        // dd($companies);
        return view('welcome',compact('companies'));
    }
    public function showApp(){
        return view('app');
    }
}
