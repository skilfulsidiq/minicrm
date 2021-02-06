<?php 
namespace App\Repositories\Company;

interface CompanyInterface{
    public function addOrUpdateCompany($arr, $slug);
    public function deleteCompany($slug);
    public function allCompanies();
    public function allCompaniesNameOnly();
    public function paginatedCompanies();
    public function companyDetail($slug);
       
}