!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o),o.register("iE7OH",(function(n,t){var r,o;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o.register("aNJCr",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=n),n}})),o("iE7OH").register(JSON.parse('{"coIxP":"favorite.ac0e422b.js","7uTDQ":"notFound_mob.9e8ef16d.jpg"}'));o("aNJCr").getBundleURL("coIxP"),o("iE7OH").resolve("7uTDQ");var i=document.querySelector(".saved-news");function a(){var e=JSON.parse(localStorage.getItem("savedNews")).map((function(e){return'<li class="images">\n          <img src="'.concat(e.img,'" alt="" width="288px" height="395px" class="news-list__img"/>\n          <p class="news-list__category">').concat(e.category,'</p>\n          <button class="img-btn favorite-true"  data-id="').concat(e.uri,'">Remove from favorite</button>\n          <h2 class="description-title">').concat(e.h2,'</h2>\n          <p class="description-of-news">').concat(e.description,'</p>\n          <div class="info-more">\n            <p class="date">').concat(e.date,'</p>\n            <a\n              class="read-more-link"\n              href="').concat(e.href,'"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              Read more\n            </a>\n          </div>\n        </li>')})).join("");i.innerHTML=e}a(),i.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName){var n=JSON.parse(localStorage.getItem("savedNews")).filter((function(n){return n.uri!==e.target.dataset.id}));localStorage.removeItem("savedNews"),localStorage.setItem("savedNews",JSON.stringify(n)),a()}}))}();
//# sourceMappingURL=favorite.ac0e422b.js.map
