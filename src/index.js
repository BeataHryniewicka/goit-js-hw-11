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
const defaultImgPerPage = 4;
let page = 1;

//funkcja do pobrania danych z API
async function fetchImages() {
  try {
    const keyWord = inputEl.value.trim();
    const response = await axios.get(
      `${API_URL}?key=${API_KEY}&q=${keyWord}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${defaultImgPerPage}`
    );
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error:' + error);
  }
}

//funkcja do utworzenia nowej tablicy zdjęć na rezultacie z fetchImages, konwersja z tablicy obiektów na tablicę ciągów html, wepchniecie do html zdjęć z parametrami, podpięcie sie pod galerię SimpleLihtbox z paginacją
async function createImages() {
  btnLoadMore.style.display = 'block';
  //tablica obiektów
  const newImages = await fetchImages();
  if (newImages.totalHits <= defaultImgPerPage) {
    btnLoadMore.style.display = 'none';
  }
  //tablica ciągów html
  const imagesHTML = newImages.hits
    //console.log(imagesHTML);
    .map(
      image =>
        `<div class="photo-card">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy">
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

  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
//funkcja createImages z powiadomieniami w zalezności od ilości zwrtów, potrzebna tylko do pierwszorazowym kliku na Show
async function createImagesNotification() {
  const newImages = await fetchImages();
  // if ((inputEl.value === ' ')) {
  //   alert('Please enter any word');
  // }
  if (newImages.totalHits === 0) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  } else {
    Notiflix.Notify.success(`Hooray! We found ${newImages.totalHits} images.`);
  }
  createImages();
}
btnSearch.addEventListener('click', createImagesNotification);

//funkcja ładowania kolejnych stron
async function showNextPage() {
  btnLoadMore.style.display = 'none';
  page++;
  const newImages = await fetchImages();
  if (page > newImages.totalHits / defaultImgPerPage + 1) {
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
  }
  const nextPage = createImages();
  nextPage.refresh();

  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

btnLoadMore.addEventListener('click', e => {
  e.preventDefault();
  btnLoadMore.style.display = 'none';
  showNextPage();
  btnLoadMore.style.display = 'block';
});

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
