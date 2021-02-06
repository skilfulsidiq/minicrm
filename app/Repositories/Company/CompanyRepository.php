<?php 
namespace App\Repositories\Company;

use App\Models\Company;
use App\Repositories\BaseRepository;
use App\Traits\Uploadable;

class CompanyRepository extends BaseRepository implements CompanyInterface{
    
use Uploadable;
    /**
     * Add or Update Company
     * @param slug(optional)
     */
    public function addOrUpdateCompany($arr, $slug){
       
        $logo = $arr['image']!=null?$arr['image']:null;
       
        try {
            if($logo !=null){
                $logo = $this->uploadOne($arr['image'],'companies');
                 $arr['logo']= $logo;
                 $r = $this->deleteFile($arr['formal_img']);
                //  dd($r);
            }else{
               unset($arr['image']);
                
            }
           
             $company = Company::updateOrCreate(['slug'=>$slug],$arr);
            
              return $this->success('Company updated successfully', $company);
        } catch (\Exception $th) {
            //throw $th;
               return $this->fail('Cannot Add or Update Company','AddCompany',$th);
        }
    
       
    }
    /**
     * delte Company
     * @param slug
     */
    public function deleteCompany($slug){
         $company = Company::where('slug', $slug)->first();
        if(!$company->delete()){
            return $this->success('Company deleted successfully', $company);
        }
        return $this->fail('Error deleting company','DeleteCompany');
        
    }
    /**
     * List of Companies
     */
    public function allCompanies(){
       return Company::orderBy('created_at','desc')->get();
    }
    public function allCompaniesNameOnly(){
         return Company::get(['id','name']);
    }
    public function paginatedCompanies(){
         return Company::orderBy('created_at','desc')->paginate(5);
    }

    /**
     * company details
     */
     public function companyDetail($slug){
         $company =  Company::where('slug', $slug)->firstOrFail();
         return $company;

     }
}