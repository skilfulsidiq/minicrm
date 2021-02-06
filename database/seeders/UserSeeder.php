<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'=>'Admin',
            'role_id'=>1,
            'company_id'=>0,
            'email'=>'test@test.com',
            'password'=>'password'
        ]);
    }
}
