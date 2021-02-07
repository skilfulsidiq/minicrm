<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
         $this->call(RoleSeeder::class);
         $this->call(UserSeeder::class);
         $this->call(AdminSeeder::class);
        //  Company::factory(20)->create();
        //  User::factory(1)->create();
    }
}
