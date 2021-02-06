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
    public function allCompanies(){
         $this->setPageTitle('Company', 'All Companies');
         $companies = $this->company->allCompanies();
         return view('admin.company.index',compact('companies'));
    }

    public function showCompanyForm($slug=null){
        $edit = false;
        $company='';
        if($slug != null){
            $edit = true;
            $company = $this->company->companyDetail($slug);
        }
        $this->setPageTitle('Companies', $edit?'Update Company':'Create Company');
        return view('admin.company.form',compact('edit','company'));

    }
    public function storeOrUpdateCompany(Request $request, $slug=null){
        $this->validate($request,['name'=>'required','email'=>'required|email','url'=>'required',
        ]);
       $image = null;
        if($request->hasFile('image')){
            $this->validate($request,[ 'image'=>'mimes:jpg,jpeg,png|max:1000']);
            $image = $request->file('image');
        }
        $incomeingData = $request->only(['name','email','url','formal_img']);
        $incomeingData['image']=$image;
        $feedback = $this->company->addOrUpdateCompany($incomeingData, $slug);
         if (!$feedback['status']) {
            return $this->responseRedirectBack('Error while updating company','error',true,true);
        }
        return $this->responseRedirect('admin.companies', 'Company updated successfully' ,'success',false, false);

    }
    public function removeCompany($slug){
        $feedback = $this->company->deleteCompany($slug);
         if (!$feedback['status']) {
            return $this->responseRedirectBack('Error while deleting company','error',true,true);
        }
        return $this->responseRedirect('admin.companies', 'Company deleted successfully' ,'success',false, false);
    }
}
