const t=document.querySelector(".news__list");let e=[];localStorage.getItem("savedNews")&&JSON.parse(localStorage.getItem("savedNews")).map((t=>{e.push(t)})),t.addEventListener("click",(t=>{if("BUTTON"===t.target.nodeName&&(t.target.classList.contains("favorite-true")||t.target.classList.contains("favorite-false"))&&(t.target.classList.toggle("favorite-true"),t.target.classList.toggle("favorite-false"),t.target.classList.contains("favorite-true")&&(t.target.style.width="168px",t.target.textContent="Remove from favorite",e.push({img:t.target.parentNode.children[0].src,href:t.target.parentNode.lastElementChild.lastElementChild.href,h2:t.target.parentNode.children[3].textContent,description:t.target.parentNode.children[4].textContent,date:t.target.parentNode.lastElementChild.children[0].textContent,uri:t.target.dataset.id,category:t.target.parentNode.children[1].textContent}),localStorage.setItem("savedNews",JSON.stringify(e))),t.target.classList.contains("favorite-false"))){t.target.style.width="126px",t.target.textContent="Add to favorite";const a=JSON.parse(localStorage.getItem("savedNews")).filter((e=>e.uri!==t.target.dataset.id));localStorage.removeItem("savedNews"),localStorage.setItem("savedNews",JSON.stringify(a)),e=a,JSON.parse(localStorage.getItem("savedNews")).length<1&&localStorage.removeItem("savedNews")}}));
//# sourceMappingURL=read.b9a9a66c.js.map
