<?php

use GuzzleHttp\Psr7\Uri;
use Illuminate\Support\Facades\Route;
use APP\Http\Controllers\Controller;
Route::get(uri:'/', action:'App\Http\Controllers\MnController@home');
Route::get(uri:'/privacy', action:'App\Http\Controllers\MnController@privacy');
Route::post(uri:'/home/check', action:'App\Http\Controllers\MnController@home_check');
