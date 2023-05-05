import axios from 'axios';
import Notiflix from 'notiflix';
import { fetchImages } from './fetchImages.js';
//import debounce from 'lodash.debounce';
//var debounce = require('lodash.debounce');

const inputEl = document.querySelector('input[name="searchQuery"]');
const btnSearch = document.querySelector('.search-btn');
const btnShowNext = document.querySelector('.show-next');

function writeKeyWord() {
  // e.preventDefault();
  // const keyWord = e.target.value;
  const keyWord = inputEl.value;
  console.log(keyWord);
  // inputEl.value = ' ';
}

const API_URL = 'https://pixabay.com/api/';

const defaultPerPage = 40;
const page = 1;
//const key =

// const imagesArray = fetchImages(keyWord);
// console.log(Array.isArray(imagesArray));

//forEach(image of ImagesArray)
//funkcja do utworzenia nowego zdjęcia

//inputEl.addEventListener('input', debounce(writeKeyWord, 1500));
btnSearch.addEventListener('click', () => {
  writeKeyWord();
  // inputEl.value = ' ';
});
