let e=new Date;const t=`${e.getDate()<10?e.getDate().toString().padStart(2,0):e.getDate()}/${e.getMonth()<10?(e.getMonth()+1).toString().padStart(2,0):e.getMonth()+1}/${e.getFullYear()}`,a=document.querySelector(".read-wrapper");function r(){JSON.parse(localStorage.getItem("read")).sort(((e,t)=>e.localeCompare(t))).forEach((e=>{const t=e;!function(e,t){let r="",s=[];const l=e.map((e=>(localStorage.getItem("already read id")&&(s=JSON.parse(localStorage.getItem("already read id"))),r=s.includes(e.id)?" overlay-shown":"",` <li class="images read-item">\n    <img class="news-list__img" src="${e.imgUrl}" alt="" width="288px" height="395px" />\n    <p class="news-list__category">${e.category}</p>\n    <button class="img-btn favorite-false" data-id="${e.id}">Add to favorite</button>\n    <h2 class="description-title">${e.title}</h2>\n    <p class="description-of-news">${e.descr}</p>\n    <div class="info-more">\n      <p class="date" data-date="${e.dateKey}">${e.date}</p>\n      <a class="already-read-link" href="${e.originUrl}" target="_blank" rel="noopener noreferrer">Read more</a>\n    </div>\n    <div class="read-overlay${r}" data-id="${e.id.slice(14,22)}"><p class="overlay-read-text">Have read</p></div>\n    </li>`))).join("");setTimeout((()=>{if(!localStorage.getItem("savedNews"))return;document.querySelectorAll(".img-btn").forEach((e=>{JSON.parse(localStorage.getItem("savedNews")).find((t=>t.uri===String(e.dataset.id)))&&(e.classList.add("favorite-true"),e.classList.remove("favorite-false"),e.textContent="Remove from favorite")}))}),500);const i=`<div class="read-list-box">\n    <div class="read-box-inner">\n    <p class="read-date">${t}</p>\n    <button class="read-btn roll-down">\n    </button></div>\n    <ul class="news__list read-list">${l}</ul></div>`;a.insertAdjacentHTML("beforeend",i)}(JSON.parse(localStorage.getItem(`${e}`)),t)}))}localStorage.getItem("read")&&r(),a.addEventListener("click",(function(e){if(!e.target.classList.contains("read-btn"))return;if(e.target.classList.contains("roll-down"))return e.target.parentNode.nextElementSibling.classList.add("visually-hidden"),e.target.classList.remove("roll-down"),void e.target.classList.add("roll-up");e.target.classList.contains("roll-up")&&(e.target.parentNode.nextElementSibling.classList.remove("visually-hidden"),e.target.classList.remove("roll-up"),e.target.classList.add("roll-down"))})),a.addEventListener("click",(function(e){if(e.target.classList.contains("already-read-link")){const s=e.target.parentNode.parentNode.children[2].dataset.id;if(localStorage.getItem("already read id")){const e=JSON.parse(localStorage.getItem("already read id"));e.push(s),localStorage.setItem("already read id",JSON.stringify(e))}else{const e=[];e.push(s),localStorage.setItem("already read id",JSON.stringify(e))}const l=e.target.previousElementSibling.dataset.date,i=JSON.parse(localStorage.getItem(`${l}`)),n=i.find((e=>e.id===s)),o=i.indexOf(n);if(i.splice(o,1),localStorage.setItem(`${l}`,JSON.stringify(i)),n.dateKey=t,localStorage.getItem(`${t}`)){const e=JSON.parse(localStorage.getItem(`${t}`));e.push(n),localStorage.setItem(`${t}`,JSON.stringify(e)),a.innerHTML="",r()}else localStorage.setItem(`${t}`,JSON.stringify(n)),a.innerHTML="",r()}}));
//# sourceMappingURL=read.0d28b793.js.map
