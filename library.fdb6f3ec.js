!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},l=n.parcelRequired7c6;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},n.parcelRequired7c6=l),l.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var l={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)l[t[n]]=e[t[n]]},a=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),l.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function l(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return l(e[2])}return"/"}(),a[e]=t),t}})),l("iE7OH").register(JSON.parse('{"2Y0K8":"library.fdb6f3ec.js","6q1P2":"image-not-found-adaptive.85e4068c.png","410VS":"icons.c957c2b7.svg","7nwxg":"library.17916b71.js"}')),l("7SdJ7");var i=document.querySelector("#watched"),o=document.querySelector("#queue"),c=document.querySelector(".js-watched-text"),u=document.querySelector(".js-queue-text");function s(e,t){for(var n=[],r=20*t-20,a=r+20,l=r;l<a&&e[l];l++)n.push(e[l]);return n}o.addEventListener("click",(function(e){if(e.target.hasAttribute("data-current"))return;e.target.setAttribute("data-current","currentPage"),i.removeAttribute("data-current"),c.style.display="none",u.style.display="block"})),i.addEventListener("click",(function(e){if(e.target.hasAttribute("data-current"))return;e.target.setAttribute("data-current","currentPage"),o.removeAttribute("data-current"),u.style.display="none",c.style.display="block"}));var d,m=l("l5bVx"),g=t(l("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(e,n,r,a,l){var i,o=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,u="function",s=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="gallery-list__item">\n    <div data-filmId="'+s((void 0===(i=null!=(i=d(r,"filmId")||(null!=n?d(n,"filmId"):n))?i:c)?"undefined":t(m)(i))===u?i.call(o,{name:"filmId",hash:{},data:l,loc:{start:{line:2,column:22},end:{line:2,column:32}}}):i)+'" class="gallery-list__card">\n        <button type="button" data-filmid="'+s((void 0===(i=null!=(i=d(r,"filmId")||(null!=n?d(n,"filmId"):n))?i:c)?"undefined":t(m)(i))===u?i.call(o,{name:"filmId",hash:{},data:l,loc:{start:{line:3,column:43},end:{line:3,column:53}}}):i)+'" class="remove-film-btn">\n            <svg class="remove-film-svg" width="26" height="30">\n                <use href="'+s((void 0===(i=null!=(i=d(r,"svg")||(null!=n?d(n,"svg"):n))?i:c)?"undefined":t(m)(i))===u?i.call(o,{name:"svg",hash:{},data:l,loc:{start:{line:5,column:27},end:{line:5,column:34}}}):i)+'#icon-clear"></use>\n            </svg>\n        </button>\n\n        <div class="gallery-list__poster">\n            <img class="gallery-list__img" src="'+s((void 0===(i=null!=(i=d(r,"urlImg")||(null!=n?d(n,"urlImg"):n))?i:c)?"undefined":t(m)(i))===u?i.call(o,{name:"urlImg",hash:{},data:l,loc:{start:{line:10,column:48},end:{line:10,column:58}}}):i)+'" alt="'+s((void 0===(i=null!=(i=d(r,"title")||(null!=n?d(n,"title"):n))?i:c)?"undefined":t(m)(i))===u?i.call(o,{name:"title",hash:{},data:l,loc:{start:{line:10,column:65},end:{line:10,column:74}}}):i)+'" loading="lazy" />\n        </div>\n\n        <div class="gallery-list__description">\n            <h2 class="gallery-list__titel">'+s((void 0===(i=null!=(i=d(r,"title")||(null!=n?d(n,"title"):n))?i:c)?"undefined":t(m)(i))===u?i.call(o,{name:"title",hash:{},data:l,loc:{start:{line:14,column:44},end:{line:14,column:53}}}):i)+'</h2>\n            <div class="gallery-list__info">\n\n                <p class="gallery-list__genre">'+s((void 0===(i=null!=(i=d(r,"ganres")||(null!=n?d(n,"ganres"):n))?i:c)?"undefined":t(m)(i))===u?i.call(o,{name:"ganres",hash:{},data:l,loc:{start:{line:17,column:47},end:{line:17,column:57}}}):i)+' | <span class="gallery-list__Year">'+s((void 0===(i=null!=(i=d(r,"relisYer")||(null!=n?d(n,"relisYer"):n))?i:c)?"undefined":t(m)(i))===u?i.call(o,{name:"relisYer",hash:{},data:l,loc:{start:{line:17,column:93},end:{line:17,column:105}}}):i)+'</span> </p>\n                <span class="gallery-list__rating">'+s((void 0===(i=null!=(i=d(r,"ratting")||(null!=n?d(n,"ratting"):n))?i:c)?"undefined":t(m)(i))===u?i.call(o,{name:"ratting",hash:{},data:l,loc:{start:{line:18,column:51},end:{line:18,column:62}}}):i)+"</span>\n\n            </div>\n        </div>\n    </div>\n</li>\n"},useData:!0}),p=l("88LCY"),f=l("4ltia");d=l("aNJCr").getBundleURL("2Y0K8")+l("iE7OH").resolve("6q1P2");var h;function y(e){var n="";return e.forEach((function(e){var r=e.genre_ids?e.genre_ids.map((function(e){return(0,f.convertGanres)(p.genreIds,e)})):["Others"];r.length>2&&(r.length=2,r.push("Others"));var a="";a=e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):e.profile_path?"https://image.tmdb.org/t/p/w300".concat(e.profile_path):t(d);var l={svg:t(h),filmId:e.id,title:e.name||e.title||"XXXX",urlImg:a,relisYer:(e.release_date||e.first_air_date||"XXXX").slice(0,4),ganres:r.join(", ")||"Others",ratting:e.vote_average};n+=g(l)})),n}h=l("aNJCr").getBundleURL("2Y0K8")+l("iE7OH").resolve("410VS");var v=l("8nrFW"),b=[];function _(e){b=t(v)(e)}function S(){return b}var w=document.querySelector(".pagination"),q=document.querySelector(".gallery-list"),k=Number(1);function x(e,t){var n=Number(e),r=Number(t);k=Number(n);var a="",l=n-Number(2),i=n-Number(1),o=n+Number(2),c=n+Number(1);n>1&&(a+='<li name="pagin-search-item" class="pagination__arrow pagination__arrow--left materials-icons">&larr;</li>'),n>2&&(a+='<li name="pagin-search-item" class="pagination__number display-none">1</li>'),n>4&&(a+='<li name="pagin-search-item" class="pagination__number display-none">...</li>'),n>3&&(a+='<li name="pagin-search-item" class="pagination__number">'.concat(l,"</li>")),n>=2&&(a+='<li name="pagin-search-item" class="pagination__number">'.concat(i,"</li>")),a+='<li name="pagin-search-item" class="pagination__number active">'.concat(n,"</li>"),n<t-1&&(a+='<li name="pagin-search-item" class="pagination__number">'.concat(c,"</li>")),n<t-2&&(a+='<li name="pagin-search-item" class="pagination__number">'.concat(o,"</li>")),n<=t-1&&(n<t-3&&(a+='<li name="pagin-search-item" class="pagination__number display-none">...</li>'),a+='<li name="pagin-search-item" class="pagination__number display-none">'.concat(r,"</li>")),n<t&&(a+="<li name=\"pagin-search-item\" class='pagination__arrow pagination__arrow--right materials-icons'>&rarr;</li>"),w.innerHTML=a,w.addEventListener("click",E)}function E(e){if("LI"===e.target.nodeName){var t=e.target.textContent;switch(window.scrollTo({top:240,behavior:"smooth"}),t){case"←":I(k-1);break;case"→":I(k+1);break;case"...":break;default:I(Number(t))}}}function I(e){var t=document.querySelector('button[data-current="currentPage"]').dataset.key,n=localStorage.getItem(t),r=JSON.parse(n),a=s(r,e),l=Math.ceil(r.length/20);r?(r.length>=20&&x(e,l),q.innerHTML=y(a),_(a),A(t)):q.innerHTML=""}var N=document.querySelector("#watched"),O=document.querySelector("#queue"),L=document.querySelector(".gallery-list"),H=document.querySelector(".js-watched-text"),j=document.querySelector(".js-queue-text"),T=document.querySelector(".pagination");function M(e){var t=document.querySelector('button[data-current="currentPage"]').dataset.key,n=localStorage.getItem(t),r=JSON.parse(n);if(!r)return L.innerHTML="",void(T.style.display="none");var a=s(r,1),l=Math.ceil(r.length/20);T.style.display="none",Number(r.length)>20&&(T.style.display="flex",x(1,l)),L.innerHTML=y(a),_(a),A(t)}function A(e){"watched-films"===e?H.style.display="none":j.style.display="none"}O.addEventListener("click",M),N.addEventListener("click",M),document.addEventListener("DOMContentLoaded",M),l("13upn"),l("3gTut"),l("2Eauc");var C=document.querySelector(".clear-library-btn"),J=document.querySelector(".pagination"),P=document.querySelector(".gallery-list"),Y=document.querySelector(".js-watched-text"),R=document.querySelector(".js-queue-text");C.addEventListener("click",(function(e){var t=document.querySelector('button[data-current="currentPage"]');(function(e){localStorage.removeItem(e),P.innerHTML="",J.style.display="none"})(t.dataset.key),"watched"===t.id?Y.style.display="block":R.style.display="block"}));var X=l("bpxeT"),U=l("2TvXO"),K=document.querySelector(".gallery-list"),D=document.querySelector(".js-watched-text"),F=document.querySelector(".js-queue-text");function z(){return(z=t(X)(t(U).mark((function e(n){var r,a,l,i;return t(U).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("svg"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:r=n.target.closest(".remove-film-btn").dataset.filmid,a=B(),V(r,a),G(a),l=S(),i=l.filter((function(e){return e.id!==Number(r)})),K.innerHTML=y(i),_(i);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return document.querySelector('button[data-current="currentPage"]').dataset.key}function V(e,t){var n=JSON.parse(localStorage.getItem(t)).filter((function(t){return t.id!==Number(e)}));return localStorage.setItem(t,JSON.stringify(n)),n}function G(e){0===JSON.parse(localStorage.getItem(e)).length&&(localStorage.removeItem(e),"watched-films"===e?D.style.display="block":F.style.display="block")}K.addEventListener("click",(function(e){return z.apply(this,arguments)}));X=l("bpxeT"),U=l("2TvXO");var W=l("3SEMc"),$=((0,l("6Urw1").initializeApp)({apiKey:"AIzaSyBUOkNmStKTSocLVZep5KOG-DCmcE-JtyU",authDomain:"team-project-filmoteka-4a376.firebaseapp.com",projectId:"team-project-filmoteka-4a376",storageBucket:"team-project-filmoteka-4a376.appspot.com",messagingSenderId:"642268048302",appId:"1:642268048302:web:153e44a9f24c349d73f63f",measurementId:"G-0YT3H2K0Y7"}),(0,W.getAuth)()),Z=document.querySelector("#user-logout");function Q(){Z.classList.toggle("hidden-link")}(0,W.onAuthStateChanged)($,(function(e){e&&Q()}));var ee,te=(ee=t(X)(t(U).mark((function e(){return t(U).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,W.signOut)($);case 2:Q();case 3:case"end":return e.stop()}}),e)}))),function(){return ee.apply(this,arguments)});Z.addEventListener("click",te)}();
//# sourceMappingURL=library.fdb6f3ec.js.map
