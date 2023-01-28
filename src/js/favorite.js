console.log(JSON.parse(localStorage.getItem('savedNews')));
const savedNews = document.querySelector('.saved-news');

function createMarkup() {
  const markup = JSON.parse(localStorage.getItem('savedNews'))
    .map(item => {
      return `<li class="images">
          <img src="${item.img}" alt="" width="288px" height="395px" />
          <button class="img-btn favorite-true"  data-id="${item.id}">Add  favorite </button>
          <h2 class="description-title">${item.h2}</h2>
          <p>${item.description}</p>
          <div class="info-more">
            <p class="date">${item.date}</p>
            <a
              class="read-more-link"
              href="${item.href}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        </li>`;
    })
    .join('');
  savedNews.innerHTML = markup;
}

createMarkup();
savedNews.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const superNewObj = JSON.parse(localStorage.getItem('savedNews')).filter(
    item => item.id !== e.target.dataset.id
  );

  localStorage.removeItem('savedNews');
  localStorage.setItem('savedNews', JSON.stringify(superNewObj));
  createMarkup();
});