<?php
namespace App\Traits;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

trait Uploadable{
     public function uploadOne(UploadedFile $file, $folder = null, $disk = 'public', $filename = null)
    {
        $name = !is_null($filename) ? $filename : Str::random(25);

        return $file->storeAs(
            'storage/'.$folder,
            $name . "." . $file->getClientOriginalExtension(),
            $disk
        );
    }

    /**
     * @param null $path
     * @param string $disk
     */
    public function deleteOne($path = null, $disk = 'public')
    {
        Storage::disk($disk)->delete($path);
    }
    public function deleteFile($path){
        if(file_exists($path)){
            unlink($path);
        }
    }
    public function uploadToFile($uploadImagename,$destinationpath,$thefile,$folder){
        $name = !is_null($uploadImagename) ? $uploadImagename.time() : str_random(25);
        $extension = $thefile->getClientOriginalName();
        $filename = $name . time() . '.' . $extension;
        $filename = str_replace(' ','',$filename);
        $thefile->move($destinationpath, $filename);
        return 'storage/'.$folder.'/'.$filename;
    }
  
}
