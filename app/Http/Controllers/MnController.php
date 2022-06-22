<?php

namespace App\Http\Controllers;

use App\Models\requesting;
use App\Models\reviews;
use Illuminate\Http\Request;

class MnController extends Controller
{
    public function home() {
        return view(view:'home'); 
     }
     
     public function privacy(){
        return view(view:'privacy'); 
     }
     public function textolite(){
      return view(view:'textolite/textolite'); 
   }
     public function home_check(Request $request){
        $valid = $request->validate([
         'FIO' => 'required|min:4|max:60',
         'phone' => 'required|min:4|max:50',
         'email' => 'required|min:4|max:50',
         'txt_za' => 'required|min:10|max:300',
        ]);

      $reqe = new requesting();
        $reqe->FIO = $request->input(key:'FIO');
        $reqe->phone = $request->input(key:'phone');
        $reqe->email = $request->input(key:'email');
        $reqe->txt_za = $request->input(key:'txt_za');
        $reqe->save();
     }
}