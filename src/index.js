import axios from 'axios';
import Notiflix from 'notiflix';
import { fetchImages } from './fetchImages.js';
//import debounce from 'lodash.debounce';
var debounce = require('lodash.debounce');

const btnEl = document.getElementById('search-btn');
const inputEl = document.getElementById('search-form');
//const searchQuery = ' ';

function writeKeyWord(e) {
  e.preventDefault();
  const keyWord = e.target.value;
  console.log(keyWord);
  // inputEl.value = ' ';
}
//searchKeyWord();
const API_URL = 'https://pixabay.com/api/';

const defaultPerPage = 40;
const page = 1;
//const key =

// const imagesArray = fetchImages(keyWord);
// console.log(Array.isArray(imagesArray));

//forEach(image of ImagesArray)
//funkcja do utworzenia nowego zdjęcia

//inputEl.addEventListener('input', debounce(writeKeyWord, 1500));
