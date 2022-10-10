
let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'Public/Js/app.js').sass('resources/scss/app.scss', 'Public/Css/app.css');
