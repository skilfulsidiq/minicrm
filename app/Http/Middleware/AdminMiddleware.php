<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
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
        $user_role = Auth::user()->role;  
        switch($user_role){
            case 'Admin':
                return $next($request);
               
            case 'Company':
                 return redirect()->route('home');
            case 'Employee':
                return redirect()->route('home');
        }

        return $next($request);
    }
}
