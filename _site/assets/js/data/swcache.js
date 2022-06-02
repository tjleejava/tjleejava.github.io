const resource = [

  /* --- CSS --- */
  '/https://tjleejava.github.io/assets/css/style.css',

  /* --- PWA --- */
  '/https://tjleejava.github.io/app.js',
  '/https://tjleejava.github.io/sw.js',

  /* --- HTML --- */
  '/https://tjleejava.github.io/index.html',
  '/https://tjleejava.github.io/404.html',
  
    '/https://tjleejava.github.io/categories/',
  
    '/https://tjleejava.github.io/tags/',
  
    '/https://tjleejava.github.io/archives/',
  
    '/https://tjleejava.github.io/about-me/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/https://tjleejava.github.io/assets/img/favicons/android-chrome-192x192.png',
    '/https://tjleejava.github.io/assets/img/favicons/android-chrome-512x512.png',
    '/https://tjleejava.github.io/assets/img/favicons/apple-touch-icon.png',
    '/https://tjleejava.github.io/assets/img/favicons/avatar.png',
    '/https://tjleejava.github.io/assets/img/favicons/favicon-16x16.png',
    '/https://tjleejava.github.io/assets/img/favicons/favicon-32x32.png',
    '/https://tjleejava.github.io/assets/img/favicons/favicon.ico',
    '/https://tjleejava.github.io/assets/img/favicons/mstile-150x150.png',
    '/https://tjleejava.github.io/assets/js/dist/categories.min.js',
    '/https://tjleejava.github.io/assets/js/dist/commons.min.js',
    '/https://tjleejava.github.io/assets/js/dist/home.min.js',
    '/https://tjleejava.github.io/assets/js/dist/misc.min.js',
    '/https://tjleejava.github.io/assets/js/dist/page.min.js',
    '/https://tjleejava.github.io/assets/js/dist/post.min.js',
    '/https://tjleejava.github.io/assets/js/dist/pvreport.min.js'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

