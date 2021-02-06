<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::group(['middleware'=>['auth','company']], function () {
    Route::get('/home', 'HomeController@index')->name('home');
});
Route::group(['middleware'=>['auth','identify.user']], function () {
    Route::get('/employee', 'HomeController@index')->name('employee');
});


Route::group(['prefix'=>'admin','namespace'=>'Admin'], function () {
    Route::get('/login', 'LoginController@showLoginForm')->name('admin.login');
    Route::post('/login', 'LoginController@login')->name('admin.login.post');
    Route::get('/logout', 'LoginController@logout')->name('admin.logout');

    Route::group(['middleware' => ['auth:admin','admin']], function () {
        Route::get('/', 'AdminController@dashboard')->name('dashboard');
        //company
        Route::get('/companies', 'CompanyController@allCompanies')->name('admin.companies');
        Route::get('/company-form/{slug?}', 'CompanyController@showCompanyForm')->name('admin.company_form');
        Route::post('/update-company/{slug?}', 'CompanyController@storeOrUpdateCompany')->name('admin.add_company');
        Route::get('/delete-company/{slug}', 'CompanyController@removeCompany')->name('admin.delete_company');
        //employee
        Route::get('/employees', 'EmployeeController@allEmployee')->name('admin.employee');
        Route::get('/employee-form/{slug?}', 'EmployeeController@showEmployeeForm')->name('admin.employee_form');
        Route::post('/update-employee/{slug?}', 'EmployeeController@storeOrUpdateEmployee')->name('admin.add_employee');
        Route::get('/delete-employee/{slug}', 'EmployeeController@removeEmployee')->name('admin.delete_employee');




    });
});

