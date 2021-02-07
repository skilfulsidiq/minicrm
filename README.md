

## Set Up Instruction

1.   Run `git clone https://github.com/skilfulsidiq/minicrm.git`

2.  then `cd minicrm`

3.  Rename `.env.example` to `.env`

4.    Run `composer install` to install all laravel dependencies

5.    Run `php artisan key:generate` to have the `APP_KEY` in `.env` file

6.   Create a database and change the DB_DATABASE, DB_HOST, DB_USERNAME and DB_PASSWORD in the `.env` files according to your created database setting

7. Run `php artisan migrate` to create database tables

8. Run `php artisan db:seed` to seed the user and role table

## LOgin Details 
1. Admin => email:  test@test.com
            password: password
