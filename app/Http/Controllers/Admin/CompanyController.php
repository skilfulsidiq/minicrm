<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Repositories\Company\CompanyInterface;
use Illuminate\Http\Request;

class CompanyController extends BaseController
{
    public $company;
    public function __construct(CompanyInterface $company)
    {
        $this->company= $company;
    }

    public function showCompanyForm($slug=null){
        $edit = false;
        $company='';
        if($slug != null){
            $edit = true;
            $company = $this->company->companyDetail($slug);
        }
        $this->setPageTitle('Company', $edit?'Update Company':'Create Company');
        return view('admin.company.form',compact('edit','company'));

    }
    public function addOrUpdateCompany(Request $request, $slug=null){
        $this->validate($request,['name','email','url','logo']);
    }
}
