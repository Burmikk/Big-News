const e=document.querySelector(".read-wrapper");if(localStorage.getItem("read")){JSON.parse(localStorage.getItem("read")).forEach((n=>{const t=n;!function(n,t){const a=n.map((e=>` <li class="images" data-id="${e.id}">\n    <img src="${e.imgUrl}" alt="" width="288px" height="395px" />\n    <p class="have-read visually-hidden">Have Read</p>\n    <p>${e.category}</p>\n    <button class="img-btn">Add to favorite</button>\n    <h2 class="description-title">${e.title}</h2>\n    <p>${e.descr}</p>\n    <div class="info-more">\n      <p class="date">${e.date}</p>\n      <a class="read-more-link" href="${e.originUrl}" target="_blank" rel="noopener noreferrer">Read more</a>\n    </div>\n    </li>`)).join(""),r=`<div class="read-list-box">\n    <div class="read-box-inner">\n    <p class="read-date">${t}</p>\n    <button class="read-btn">\n    <svg class="roll-icon" width="9" height="15">\n        <use href="../img/symbol-defs.svg#icon-Vector-up"></use>\n    </svg>\n    </button></div>\n    <ul class="news__list">${a}</ul></div>`;e.insertAdjacentHTML("beforeend",r)}(JSON.parse(localStorage.getItem(`${n}`)),t)}))}e.addEventListener("click",(function(e){console.dir(e.target)})),e.addEventListener("click",(function(e){console.dir(e.terget.parentNode)}));
//# sourceMappingURL=read.38148caf.js.map