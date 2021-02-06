<?php

use Illuminate\Support\Facades\Route;

if(!function_exists('setActive')){
  function setActive($path=[]){
    $active = Route::currentRouteName();
    // return Request::is($path . '*') ? ' class=active' :  '';
    if(in_array($active,$path)){
      return 'active';
    }else{
      return '';
    }
  }
}
if(!function_exists('setOpenActive')){
    function setOpenActive($path=[]){
      $active = Route::currentRouteName();
      // return Request::is($path . '*') ? ' class=active' :  '';
      if(in_array($active,$path)){
        return 'active';
      }else{
        return '';
      }
    }
  }

if(!function_exists('setActiveIcon')){
  function setActiveIcon($activeIcon, $inactiveIcon, $path){
    $active = Route::currentRouteName();
    // return Request::is($path . '*') ? ' class=active' :  '';
     if(in_array($active,$path)){
      return $activeIcon;
    }else{
      return $inactiveIcon;
    }
  }
}



if(!function_exists('setSingleActive')){
  function setSingleActive($path){
    $active = Route::currentRouteName();
    // return Request::is($path . '*') ? ' class=active' :  '';
    if($active == $path){
      return 'active';
    }else{
      return '';
    }
  }
}
