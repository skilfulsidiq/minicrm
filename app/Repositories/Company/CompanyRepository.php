<?php 
namespace App\Repositories\Company;

use App\Models\Company;
use App\Repositories\BaseRepository;

class CompanyRepository extends BaseRepository implements CompanyInterface{
    

    /**
     * Add or Update Company
     * @param slug(optional)
     */
    public function addOrUpdateCompany($arr, $slug){
        
        $company = Company::updateOrCreate(['slug'=>$slug],$arr);
        if(!$company){
            return $this->fail('Cannot Add or Update Company','AddCompany');
        }
        return $this->success('Company updated successfully', $company);
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
        return Company::paginate(5);
    }
}