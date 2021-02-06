<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Company extends Model
{
    use HasFactory;
    protected $fillable=['name','email','logo','url','slug'];

     public function setNameAttribute($value){
        $this->attributes['name']= $value;
        $this->attributes['slug']= Str::slug($value);
    }
    public function users(){
        return $this->hasMany(User::class,'company_id');
    }
}
