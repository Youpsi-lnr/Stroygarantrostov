const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

    mix.styles('resources/css/main.css', 'public/css/styles.css');
    mix.styles('resources/css/adaptive.css', 'public/css/adaptivess.css');
    mix.styles('resources/css/modal.min.css', 'public/css/modals.min.css');
    mix.styles('resources/css/owl.carousel.min.css', 'public/css/owl.carousel.min.css');
    mix.styles('resources/css/owl.theme.default.min.css', 'public/css/owl.theme.default.min.css');
    mix.styles('resources/css/simple-adaptive-slider.css', 'public/css/simple-adaptive-slider.css');

    mix.js('resources/js/jquery.maskedinput.min.js', 'public/js/jquery.maskedinput.min.js');
    mix.js('resources/js/apps.js', 'public/js/apps.js');
    mix.js('resources/js/owl.carousel.min.js', 'public/js/owl.carousel.min.js');

    mix.scripts([
        'resources/js/libs/dist/jquery.min.js',
        'resources/js/simple-adaptive-slider.min.js'
    ], 'public/js/allin.js');