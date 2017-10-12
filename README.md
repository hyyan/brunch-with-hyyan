# Brunch With Bower , Bootstrap Sass And jQuery

[![project status](http://www.repostatus.org/badges/latest/active.svg)](http://www.gitchecker.com/hyyan/brunch-with-hyyan)
[![dependency Status](https://david-dm.org/hyyan/brunch-with-hyyan/status.svg)](https://david-dm.org/hyyan/brunch-with-hyyan#info=dependencies)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/hyyan/brunch-with-hyyan/blob/master/LICENSE)

HTML5 application, built with [Brunch](http://brunch.io), Bootstrap Sass And jQuery

## Getting started
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * [Bower](http://bower.io): `npm install -g bower`
    * Brunch plugins and Bower dependencies: `npm install`.
* Run:
    * `npm start`             — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm test`              - Run you tests inside `test` folder using karam and mocha
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * Place styles in `app/scss/styles` to be compiled to `public/css/app.css`
    * Place styles in `app/scss/styles-rtl` to be compiled to `public/css/app-rtl.css`
    * Place styles in `app/scss/editor` to be compiled to `public/css/editor.css`
    * Place styles in `app/scss/editor-rtl` to be compiled to `public/css/editor-rtl.css`
    * Place javascripts in `app/scripts` to be concatenated to `public/js/app.js`
    * [Brunch site](http://brunch.io)
    * [Sass site](http://sass-lang.com)
    * [Bootstrap site](http://getbootstrap.com)
   
## How To Use With Wordpress
You can use the [Brunch Wordpress Theme](https://github.com/hyyan/brunch-wordpress-theme) starter theme , which make use of all features of this skeleton in wordpress context.

