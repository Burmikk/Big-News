!function(){var t=new Date,e=t.getDate()<10?t.getDate().toString().padStart(2,0):t.getDate(),a=t.getMonth()<10?(t.getMonth()+1).toString().padStart(2,0):t.getMonth()+1,n=t.getFullYear(),o="".concat(e,"/").concat(a,"/").concat(n),r=document.querySelector(".read-wrapper");localStorage.getItem("read")&&JSON.parse(localStorage.getItem("read")).sort((function(t,e){return e.localeCompare(t)})).forEach((function(t){var e=t;!function(t,e){var a=t.map((function(t){return' <li class="images read-item">\n    <img class="news-list__img" src="'.concat(t.imgUrl,'" alt="" width="288px" height="395px" />\n    <p class="have-read visually-hidden">Have Read</p>\n    <p class="news-list__category">').concat(t.category,'</p>\n    <button class="img-btn favorite-false" data-id="').concat(t.id,'">Add to favorite</button>\n    <h2 class="description-title">').concat(t.title,'</h2>\n    <p class="description-of-news">').concat(t.descr,'</p>\n    <div class="info-more">\n      <p class="date" data-date="').concat(t.dateKey,'">').concat(t.date,'</p>\n      <a class="already-read-link" href="').concat(t.originUrl,'" target="_blank" rel="noopener noreferrer">Read more</a>\n    </div>\n    </li>')})).join("");setTimeout((function(){localStorage.getItem("savedNews")&&document.querySelectorAll(".img-btn").forEach((function(t){JSON.parse(localStorage.getItem("savedNews")).find((function(e){return e.uri===String(t.dataset.id)}))&&(t.classList.add("favorite-true"),t.classList.remove("favorite-false"),t.textContent="Remove from favorite")}))}),500);var n='<div class="read-list-box">\n    <div class="read-box-inner">\n    <p class="read-date">'.concat(e,'</p>\n    <button class="read-btn roll-down">\n    </button></div>\n    <ul class="news__list read-list">').concat(a,"</ul></div>");r.insertAdjacentHTML("beforeend",n)}(JSON.parse(localStorage.getItem("".concat(t))),e)})),r.addEventListener("click",(function(t){if(!t.target.classList.contains("read-btn"))return;if(t.target.classList.contains("roll-down"))return t.target.parentNode.nextElementSibling.classList.add("visually-hidden"),t.target.classList.remove("roll-down"),void t.target.classList.add("roll-up");t.target.classList.contains("roll-up")&&(t.target.parentNode.nextElementSibling.classList.remove("visually-hidden"),t.target.classList.remove("roll-up"),t.target.classList.add("roll-down"))})),r.addEventListener("click",(function(t){if(t.target.classList.contains("already-read-link")){var e=t.target.parentNode.parentNode.children[3].dataset.id;t.target.parentNode.parentNode.children[1].classList.remove("visually-hidden");var a=t.target.previousElementSibling.dataset.date,n=JSON.parse(localStorage.getItem("".concat(a))),r=n.find((function(t){return t.id===e})),l=n.indexOf(r);if(console.log("localArr",n),n.splice(l,1),console.log("newsReadingDate",a),console.log("newsItem",r),console.log("indexOfNews",l),console.log("localArr after splice",n),localStorage.setItem("".concat(a),JSON.stringify(n)),r.dateKey=o,localStorage.getItem("".concat(o))){var s=JSON.parse(localStorage.getItem("".concat(o)));s.push(r),localStorage.setItem("".concat(o),JSON.stringify(s))}else localStorage.setItem("".concat(o),JSON.stringify(r))}}))}();
//# sourceMappingURL=read.8d02622c.js.map