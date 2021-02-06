<?php 
namespace App\Repositories;

use Illuminate\Support\Facades\Log;

class BaseRepository{

     public function fail($msg,$logMsg='App Error', $log=null){
        $feedback = [];
        $feedback['status'] = false;
        $feedback['msg'] = $msg;
       if($log != null){ Log::debug($logMsg.' : '.$log->getMessage());}
        return $feedback;
    }
    public function success($msg,$data){
         $feedback = [];
        $feedback['status'] = true;
        $feedback['msg'] = $msg;
        $feedback['data'] = $data;
        return $feedback;
    }
}