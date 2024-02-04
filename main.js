let swlocation ="sw.js";

if(navigator.serviceWorker){
    if(window.location.href.includes("localhost"))swlocation="sw.js";
    navigator.serviceWorker.register(swlocation);
}
