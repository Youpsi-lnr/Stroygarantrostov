<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\ServiceProvider;

use Leeto\MoonShine\MoonShine;
use Leeto\MoonShine\Resources\MoonShineUserResource; 
use Leeto\MoonShine\Resources\MoonShineUserRoleResource; 
use App\MoonShine\Resources\PostResource;
use App\MoonShine\Resources\ReviResource; 
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Model::preventLazyLoading(!app()->isProduction());

        app(MoonShine::class)->registerResources([
            MoonShineUserResource::class, // Системный раздел с администраторами
            PostResource::class,
            ReviResource::class,
        ]);
    }
}
