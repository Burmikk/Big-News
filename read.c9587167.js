!function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));var r=document.querySelectorAll(".mobile-menu__link"),l=!0,a=!1,c=void 0;try{for(var d,i=r[Symbol.iterator]();!(l=(d=i.next()).done);l=!0){var u=d.value;u.href===window.location.href&&u.parentNode.classList.add("current")}}catch(e){a=!0,c=e}finally{try{l||null==i.return||i.return()}finally{if(a)throw c}}}();
//# sourceMappingURL=read.c9587167.js.map
