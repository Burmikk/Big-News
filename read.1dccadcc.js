!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}})),a("iE7OH").register(JSON.parse('{"kA5Rt":"read.1dccadcc.js","4BzQQ":"symbol-defs.0ab6b783.svg"}'));a("aNJCr").getBundleURL("kA5Rt"),a("iE7OH").resolve("4BzQQ");var o=new Date,i=o.getDate()<10?o.getDate().toString().padStart(2,0):o.getDate(),c=o.getMonth()<10?(o.getMonth()+1).toString().padStart(2,0):o.getMonth()+1,s=o.getFullYear(),l="".concat(i,"/").concat(c,"/").concat(s),d=document.querySelector(".read-wrapper");function u(){JSON.parse(localStorage.getItem("read")).sort((function(e,t){return t.localeCompare(e)})).forEach((function(e){var t=e;!function(e,t){console.log(e);var n=e.map((function(e){return' <li class="images read-item">\n    <img class="news-list__img" src="'.concat(e.imgUrl,'" alt="" width="288px" height="395px" />\n    <p class="have-read visually-hidden">Have Read</p>\n    <p class="news-list__category">').concat(e.category,'</p>\n    <button class="img-btn favorite-false" data-id="').concat(e.id,'">Add to favorite</button>\n    <h2 class="description-title">').concat(e.title,'</h2>\n    <p class="description-of-news">').concat(e.descr,'</p>\n    <div class="info-more">\n      <p class="date" data-date="').concat(e.dateKey,'">').concat(e.date,'</p>\n      <a class="read-more-link" href="').concat(e.originUrl,'" target="_blank" rel="noopener noreferrer">Read more</a>\n    </div>\n    </li>')})).join("");setTimeout((function(){localStorage.getItem("savedNews")&&document.querySelectorAll(".img-btn").forEach((function(e){JSON.parse(localStorage.getItem("savedNews")).find((function(t){return t.uri===String(e.dataset.id)}))&&(e.classList.add("favorite-true"),e.classList.remove("favorite-false"),e.textContent="Remove from favorite")}))}),500);var r='<div class="read-list-box">\n    <div class="read-box-inner">\n    <p class="read-date">'.concat(t,'</p>\n    <button class="read-btn">\n    <svg class="roll-down-icon" width="9" height="15">\n        <use href="down"></use>\n    </svg>\n    <svg class="roll-up-icon" width="9" height="15">\n        <use href="up"></use>\n    </svg>\n    </button></div>\n    <ul class="news__list read-list">').concat(n,"</ul></div>");d.insertAdjacentHTML("beforeend",r)}(JSON.parse(localStorage.getItem("".concat(e))),t)}))}localStorage.getItem("read")&&u(),d.addEventListener("click",(function(e){e.target.classList.contains("read-btn")&&e.target.parentNode.nextElementSibling.classList.toggle("visually-hidden")})),d.addEventListener("click",(function(e){if(e.target.classList.contains("read-more-link")){var t=e.target.parentNode.parentNode.children[3].dataset.id;e.target.parentNode.parentNode.children[1].classList.remove("visually-hidden");var n=e.target.previousElementSibling.dataset.date,r=JSON.parse(localStorage.getItem("".concat(n))),a=r.find((function(e){return e.id===t})),o=r.indexOf(a);if(r.splice(o,1),localStorage.getItem("".concat(l))){var i=JSON.parse(localStorage.getItem("".concat(l)));i.push(a),localStorage.setItem("".concat(l),JSON.stringify(i)),u()}else{localStorage.setItem("".concat(l),JSON.stringify(a));JSON.parse(localStorage.getItem("".concat(l)));u()}}}))}();
//# sourceMappingURL=read.1dccadcc.js.map
