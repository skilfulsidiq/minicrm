<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Company\CompanyInterface;
use App\Repositories\Company\CompanyRepository;
use App\Repositories\User\UserRepository;
use App\Repositories\User\UserInterface;

class RepositoryProvider extends ServiceProvider
{
     /**
     * Repository list
     */
    protected $repositories = [
        CompanyInterface::class   => CompanyRepository::class,
        UserInterface::class      => UserRepository::class
    ];
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
         /**
         * bind the repository to app container
         */
        foreach($this->repositories as $interface =>$implementation){
            app()->bind($interface, $implementation);
        }
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
