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




    });
});

