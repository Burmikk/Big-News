let e=new Date;const t=`${e.getDate()<10?e.getDate().toString().padStart(2,0):e.getDate()}/${e.getMonth()<10?(e.getMonth()+1).toString().padStart(2,0):e.getMonth()+1}/${e.getFullYear()}`,a=document.querySelector(".read-wrapper");localStorage.getItem("read")&&JSON.parse(localStorage.getItem("read")).sort(((e,t)=>t.localeCompare(e))).forEach((e=>{const t=e;!function(e,t){const s=e.map((e=>` <li class="images read-item">\n    <img class="news-list__img" src="${e.imgUrl}" alt="" width="288px" height="395px" />\n    <p class="have-read visually-hidden">Have Read</p>\n    <p class="news-list__category">${e.category}</p>\n    <button class="img-btn favorite-false" data-id="${e.id}">Add to favorite</button>\n    <h2 class="description-title">${e.title}</h2>\n    <p class="description-of-news">${e.descr}</p>\n    <div class="info-more">\n      <p class="date" data-date="${e.dateKey}">${e.date}</p>\n      <a class="already-read-link" href="${e.originUrl}" target="_blank" rel="noopener noreferrer">Read more</a>\n    </div>\n    </li>`)).join("");setTimeout((()=>{localStorage.getItem("savedNews")&&document.querySelectorAll(".img-btn").forEach((e=>{JSON.parse(localStorage.getItem("savedNews")).find((t=>t.uri===String(e.dataset.id)))&&(e.classList.add("favorite-true"),e.classList.remove("favorite-false"),e.textContent="Remove from favorite")}))}),500);const l=`<div class="read-list-box">\n    <div class="read-box-inner">\n    <p class="read-date">${t}</p>\n    <button class="read-btn roll-down">\n    </button></div>\n    <ul class="news__list read-list">${s}</ul></div>`;a.insertAdjacentHTML("beforeend",l)}(JSON.parse(localStorage.getItem(`${e}`)),t)})),a.addEventListener("click",(function(e){if(!e.target.classList.contains("read-btn"))return;if(e.target.classList.contains("roll-down"))return e.target.parentNode.nextElementSibling.classList.add("visually-hidden"),e.target.classList.remove("roll-down"),void e.target.classList.add("roll-up");e.target.classList.contains("roll-up")&&(e.target.parentNode.nextElementSibling.classList.remove("visually-hidden"),e.target.classList.remove("roll-up"),e.target.classList.add("roll-down"))})),a.addEventListener("click",(function(e){if(e.target.classList.contains("already-read-link")){const a=e.target.parentNode.parentNode.children[3].dataset.id;e.target.parentNode.parentNode.children[1].classList.remove("visually-hidden");const s=e.target.previousElementSibling.dataset.date,l=JSON.parse(localStorage.getItem(`${s}`)),r=l.find((e=>e.id===a)),n=l.indexOf(r);if(console.log("localArr",l),l.splice(n,1),console.log("newsReadingDate",s),console.log("newsItem",r),console.log("indexOfNews",n),console.log("localArr after splice",l),localStorage.setItem(`${s}`,JSON.stringify(l)),r.dateKey=t,localStorage.getItem(`${t}`)){const e=JSON.parse(localStorage.getItem(`${t}`));e.push(r),localStorage.setItem(`${t}`,JSON.stringify(e))}else localStorage.setItem(`${t}`,JSON.stringify(r))}}));
//# sourceMappingURL=read.7569cd17.js.map