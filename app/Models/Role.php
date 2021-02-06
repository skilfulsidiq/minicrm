<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Role extends Model
{
    use HasFactory;
    protected $fillable=['role','slug'];

    public function setRoleAttribute($value){
        $this->attributes['role']= $value;
        $this->attributes['slug']= Str::slug($value);
    }
    public function users(){
        return $this->hasMany(User::class,'role_id');
    }
}
