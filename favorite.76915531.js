const e=document.querySelector(".saved-news");function t(){const t=JSON.parse(localStorage.getItem("savedNews")).map((e=>`<li class="images">\n          <img src="${e.img}" alt="" width="288px" height="395px" />\n          <button class="img-btn favorite-true"  data-id="${e.uri}">Remove from favorite</button>\n          <h2 class="description-title">${e.h2}</h2>\n          <p>${e.description}</p>\n          <div class="info-more">\n            <p class="date">${e.date}</p>\n            <a\n              class="read-more-link"\n              href="${e.href}"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              Read more\n            </a>\n          </div>\n        </li>`)).join("");e.innerHTML=t}t(),e.addEventListener("click",(e=>{if("BUTTON"!==e.target.nodeName)return;const a=JSON.parse(localStorage.getItem("savedNews")).filter((t=>t.uri!==e.target.dataset.id));localStorage.removeItem("savedNews"),localStorage.setItem("savedNews",JSON.stringify(a)),t()}));
//# sourceMappingURL=favorite.76915531.js.map
