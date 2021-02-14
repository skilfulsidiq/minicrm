<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace'=>'Api'],function(){
    Route::post('/login','AuthController@login');
    Route::post('/forgot-password','AuthController@forgot_password');
    Route::post('/change-password-code','AuthController@changePasswordUsingCode');


    Route::get('/all-companies','GeneralController@allCompanies');

    
});
Route::group(['namespace'=>'Api/User','middleware'=>['auth:sanctum']],function(){

    Route::post('/update-profile/{slug}','GeneralController@updateProfile');
});