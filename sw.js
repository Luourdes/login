const STATIC_CACHE="static";

const APP_SHELL=[
"/",
"aver.html", 
"resultado.html",
"datos.js",
"enviardatos.js",
"Estilo.css",
"esta.jpg", 
"logo.png"

];

self.addEventListener("install", (e)=>{
    const cacheStatic=caches
    .open(STATIC_CACHE)
    .then((Cache)=> Cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e)=>{
    console.log("fectch!", e.request);

    e.respondwith(
        caches
        .match(e.request)
        .then((res)=>res ||fetch(e,request))
        .caches(console.log)
    );
});