"use strict";var precacheConfig=[["/zz2-f5-ci/index.html","a59bc4531295ee1955b33ec63ba454d4"],["/zz2-f5-ci/static/css/main.6f9698f2.css","6bf21bd832c11ec46dada03c5a30d072"],["/zz2-f5-ci/static/js/main.f4194104.js","e5b66d027ab5f032ddae176bc355c960"],["/zz2-f5-ci/static/media/agile.b5422afb.jpg","b5422afbe6acb05c4a7244aa7ce19fdd"],["/zz2-f5-ci/static/media/async.a04e61c3.png","a04e61c35555ac4de36ea4040cd45cbb"],["/zz2-f5-ci/static/media/boucles.385a4c7e.png","385a4c7e35dffe11b3a8cae9b3e7ea93"],["/zz2-f5-ci/static/media/branch.0fae18c3.png","0fae18c37992b929deb4e6d7cf70d46a"],["/zz2-f5-ci/static/media/commit.9beec204.png","9beec20443807e17501610ff196a4c90"],["/zz2-f5-ci/static/media/condition.e81b8d45.png","e81b8d45558a49a11d32f70b8d05c1e8"],["/zz2-f5-ci/static/media/css.46ecf5bd.png","46ecf5bdce1354ff8f9c1a9be6b362a8"],["/zz2-f5-ci/static/media/decentralized.1fb5630d.png","1fb5630d847ff829eef78eba5c7bfed0"],["/zz2-f5-ci/static/media/diff.da11636f.png","da11636f8d0dfe9ba3b4df954a6ab4d9"],["/zz2-f5-ci/static/media/ejs.a44849f2.png","a44849f2d577e0a57da0345e93b5eb1c"],["/zz2-f5-ci/static/media/express.8ef63b84.png","8ef63b84d75d988d6700bb88f8fc47d4"],["/zz2-f5-ci/static/media/fonctions.7517dc16.png","7517dc16921a81a0c53ecdaf31e74964"],["/zz2-f5-ci/static/media/frontBack.f8ef22fd.png","f8ef22fdca08a3b797e048715c75b97b"],["/zz2-f5-ci/static/media/functional.4e690147.png","4e690147df6d350eb37ab3cd45f46b39"],["/zz2-f5-ci/static/media/get.9de2529d.png","9de2529d5576d557a1b53f1de21f2dbb"],["/zz2-f5-ci/static/media/gitflow.42fd0cda.png","42fd0cda50b10c84ccbb8833c3201d66"],["/zz2-f5-ci/static/media/gitlabCiExempleImg.3c9f1fe2.png","3c9f1fe2b35b140d9ffa4e8644c2b740"],["/zz2-f5-ci/static/media/html.943e9b3e.png","943e9b3e3d9f94593564a3e6c380265e"],["/zz2-f5-ci/static/media/http.d5f44220.png","d5f4422024e69130f26f031945ff87b2"],["/zz2-f5-ci/static/media/intro.1701acf6.png","1701acf6b7dff6f06767cc1704a9cbe2"],["/zz2-f5-ci/static/media/jwt.8aa95b5d.png","8aa95b5dd280be08ad0638c7ad6c59d5"],["/zz2-f5-ci/static/media/materialize.c032a220.gif","c032a220a8bc720a20346308d7fdc6bf"],["/zz2-f5-ci/static/media/merge.01c604a5.png","01c604a559b40c5d127ce963fb057ca9"],["/zz2-f5-ci/static/media/microservices.ddb6d031.png","ddb6d031aa4ba3974a74208c242cf2ca"],["/zz2-f5-ci/static/media/middleware-schema.651ed116.png","651ed11685e061138d5e9cd31c37821b"],["/zz2-f5-ci/static/media/middleware.54a88531.png","54a8853137f24e5efaec06a090714efc"],["/zz2-f5-ci/static/media/monolith.d191db40.png","d191db40efafe3e4de6a37654b45bec3"],["/zz2-f5-ci/static/media/mvcs.a98a63ff.png","a98a63ffa6bb294ddb61fe1963d5f472"],["/zz2-f5-ci/static/media/node.59bd9238.png","59bd9238774bb57a59e408476f5319e7"],["/zz2-f5-ci/static/media/oauth2.14d03f9e.png","14d03f9ef418f76978129486f2a02fa8"],["/zz2-f5-ci/static/media/package.56c5ade3.png","56c5ade3d915675d4f6a23c5b5bdb3a1"],["/zz2-f5-ci/static/media/pizza.5bda1fba.jpg","5bda1fba0d0d323a897572a6ca0ca6dd"],["/zz2-f5-ci/static/media/post.73e5678c.png","73e5678ca88fb04789f33f506a1b20ad"],["/zz2-f5-ci/static/media/promises.0b850b0d.png","0b850b0dcb8ff3bab9ee4e051e4f1366"],["/zz2-f5-ci/static/media/pull.9832994d.png","9832994dd96d065d8fee6812a4ed58d1"],["/zz2-f5-ci/static/media/push.f0106a8e.png","f0106a8e600808d7678f7b7539ed1327"],["/zz2-f5-ci/static/media/rebase.495cf990.png","495cf9906076452ae6291656d24ceb19"],["/zz2-f5-ci/static/media/revert.3e8e9e27.png","3e8e9e27b2e4704605e3717c35ed5cf3"],["/zz2-f5-ci/static/media/routage.9a69b1e5.png","9a69b1e5eaddf5275358f495cd70fb49"],["/zz2-f5-ci/static/media/serverless.9ef51a01.png","9ef51a0197d64e97d72151da18ea418b"],["/zz2-f5-ci/static/media/session.d0095366.png","d0095366c3c530a85893701231402304"],["/zz2-f5-ci/static/media/structures.647e24df.png","647e24df044da70954c260f8188029c6"],["/zz2-f5-ci/static/media/transpilateur.80c1af5b.png","80c1af5b49f57a05f05778d618aad92e"],["/zz2-f5-ci/static/media/vars.88991543.png","88991543ba1721014ed16fa64c9d059f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var i=new URL(e);return t&&i.pathname.match(t)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),i=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var i="/zz2-f5-ci/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});