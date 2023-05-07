import axios from 'axios';
import Notiflix from 'notiflix';
//import { fetchImages } from './fetchImages.js';
//import debounce from 'lodash.debounce';
//var debounce = require('lodash.debounce');

const inputEl = document.querySelector('input[name="searchQuery"]');
const keyWord = inputEl.value;

const btnSearch = document.querySelector('.search-btn');
const btnLoadMore = document.querySelector('.load-more');
const galeryListEl = document.querySelector('.galleryList');

const API_URL = `https://pixabay.com/api/`;
const API_KEY = `36096089-8019a6978013fb7a12ca287ee`;

const defaultImgPerPage = 40;
const page = 1;

async function fetchImages() {
  try {
    const response = await axios.get(
      `${API_URL}?key=${API_KEY}&q=${keyWord}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${defaultImgPerPage}`
    );
    if (response.data.hits.lenght === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    console.log(response.data.hits);
    return response.data.hits;
  } catch (error) {
    console.error('Error:' + error);
  }
}
btnSearch.addEventListener('click', fetchImages());

async function createImg() {
  //tablica obiektów
  const newImages = await fetchImages();
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

  // if (newImages.length <= 40) {
  //   btnLoadMore.style.display = 'none';
  // }
  galeryListEl.innerHTML += imagesHTML;
}

btnLoadMore.addEventListener('click', createImg);

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

// function writeKeyWord() {
//   // e.preventDefault();
//   // const keyWord = inputEl.value;
//   console.log(keyWord);
// }
//inputEl.addEventListener('input', debounce(writeKeyWord, 1500));

// btnSearch.addEventListener('click', () => {
//   writeKeyWord();
//   inputEl.value = ' ';
// });
