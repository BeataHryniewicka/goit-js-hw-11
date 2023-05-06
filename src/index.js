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

function createImg(image) {
  galeryListEl.innerHTML = `<div class="photo-card">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}">
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${image.likes}</p>
          <p class="info-item"><b>Views:</b> ${image.views}</p>
          <p class="info-item"><b>Comments:</b> ${image.comments}</p>
          <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
        </div>
      </div>`;
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

//function createImg() {}
// async const createGallery = ()=> {
//   await fetchImages();
//   .then()
//   .catch()
// }

// const imagesArray = fetchImages(keyWord);
// console.log(Array.isArray(imagesArray));

//forEach(image of ImagesArray)
//funkcja do utworzenia nowego zdjęcia :
// webformatURL - link do małego obrazka.
// largeImageURL - link do dużego obrazka.
// tags - wiersz z opisem obrazka. Będzie pasować do atrybutu alt.
// likes - liczba “lajków”.
// views - liczba wyświetleń.
// comments - liczba komentarzy.
// downloads - liczba pobrań.

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
