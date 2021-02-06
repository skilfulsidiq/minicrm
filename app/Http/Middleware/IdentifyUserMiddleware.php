<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IdentifyUserMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(!Auth::check()){
            return redirect()->route('login');
        } 
       $user_role = Auth::user()->role->role; 
        switch($user_role){
            case 'Admin':
                return redirect()->route('dashboard');
            case 'Company':
                  return redirect()->route('company');
            case 'Employee':
                return $next($request);
        }
        abort(404);
        // return $next($request);
    }
}
