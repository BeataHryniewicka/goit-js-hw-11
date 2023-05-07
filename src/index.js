import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
//var debounce = require('lodash.debounce');

const inputEl = document.querySelector('input[name="searchQuery"]');
const btnSearch = document.querySelector('.search-btn');
const btnLoadMore = document.querySelector('.load-more');
const galleryEl = document.querySelector('.gallery');

const API_URL = `https://pixabay.com/api/`;
const API_KEY = `36096089-8019a6978013fb7a12ca287ee`;

const defaultImgPerPage = 3;
const page = 1;

async function fetchImages() {
  try {
    let keyWord = inputEl.value;
    const response = await axios.get(
      `${API_URL}?key=${API_KEY}&q=${keyWord}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${defaultImgPerPage}`
    );
    if (response.data.hits.lenght === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    console.log(response.data.hits);
    console.log(response.data.totalHits);
    console.log(keyWord);

    const totalHits = response.data.totalHits;
    if (totalHits > 0)
      Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`);
    return response.data.hits;
  } catch (error) {
    console.error('Error:' + error);
  }
}

async function createImages() {
  //tablica obiektów
  const newImages = await fetchImages();
  btnLoadMore.style.display = 'block';

  //tablica ciągów html
  const imagesHTML = newImages
    //używamy metody map() na tablicy newImages, aby utworzyć nową tablicę imagesHTML, która składa się z ciągów HTML reprezentujących każdy obrazek.
    .map(
      image =>
        `<div class="photo-card">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}">
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${image.likes}</p>
          <p class="info-item"><b>Views:</b> ${image.views}</p>
          <p class="info-item"><b>Comments:</b> ${image.comments}</p>
          <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
        </div>
      </div>`
    )
    .join(' ');

  galleryEl.innerHTML += imagesHTML;
  new SimpleLightbox('.gallery a');
}

btnSearch.addEventListener('click', createImages);

function loadMore() {
  console.log("We're sorry, but you've reached the end of search results.");
  // page++;
  btnLoadMore.display.style = 'none';
  Notiflix.Notify.info(
    "We're sorry, but you've reached the end of search results."
  );
}
btnLoadMore.addEventListener('click', loadMore);

//do zrobienia:
//paginacja
//buttony chowanie
//załadowanie kolejnej strony
//We're sorry, but you've reached the end of search results."
//simplelightbox - nie działa

// function createApiObjects() {
//   new apiObject({
//     key: API_KEY,
//     q: keyWord,
//     image_type: photo,
//     orientation: horizontal,
//     safesearch: true,
//     page: page,
//     per_page: defaultImgPerPage,
//   });
// }
