// This is the "Offline page" service worker

// Add this below content to your HTML page inside a <script type="module"></script> tag, or add the js file to your page at the very top to register service worker
// If you get an error about not being able to import, double check that you have type="module" on your <script /> tag

/*
 This code uses the pwa-update web component https://github.com/pwa-builder/pwa-update to register your service worker,
 tell the user when there is an update available and let the user know when your PWA is ready to use offline.
*/

import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';

const el = document.createElement('pwa-update');
document.body.appendChild(el);

 if(!('serviceWorker' in navigator)){
            console.log("Service worker tidak didukung browser ini");
        } else {
            registerServiceWorker();
            requestPermission();
        }

        //Register service worker
        function registerServiceWorker(){
            return navigator.serviceWorker.register('pwabuilder-sw.js')
            .then(function(registration){
                console.log("Registrasi service worker berhasil");
                return registration;
            })
            .catch(function(err){
                console.log("Registrasi service worker gagal", err);
            });
        }
