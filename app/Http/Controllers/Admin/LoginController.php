<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BaseController;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends BaseController
{
    use AuthenticatesUsers;

    /**
     * Where to redirect admins after login.
     *
     * @var string
     */
    protected $redirectTo = '/admin';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest')->except('logout');
        $this->middleware('guest:admin')->except('logout');
        // $this->middleware('guest', ['except' => 'logout']);

    }

    /**
     * show admin login form
     */
    public function showLoginForm()
    {
        $this->setPageTitle('Login','login');
        return view('admin.login');
    }
    /**
     * Login admin 
     */
    public function login(Request $request)
    {

        $this->validate($request, [
            'email'   => 'required|email',
            'password' => 'required|min:6'
        ]);

        if (Auth::guard('admin')->attempt(['email' => $request->email,'password' => $request->password], $request->get('remember'))) {
            return $this->responseRedirect('dashboard','welcome');
        }

        return $this->responseRedirectBack('invalid email or password','info',true,true);
    }

    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        return redirect()->route('login');
    }
}
