<?php

namespace App\Http\Controllers\Api\Admin;

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
        //  $this->setPageTitle('Company', 'All Companies');
         $companies = $this->company->allCompanies();
         return $this->sendSuccess($companies,'all Companies');
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
            return $this->sendError('Error while updating company',[$feedback['msg']]);
        }
        return $this->sendSuccess($feedback['data'],'company info updated');

    }
    public function removeCompany($slug){
        $feedback = $this->company->deleteCompany($slug);
         if (!$feedback['status']) {
            return $this->sendError('Error while deleting company',[$feedback['msg']]);
        }
       return $this->sendSuccess($feedback['data'],'company info deleted');
    }
}
