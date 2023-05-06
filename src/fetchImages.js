import Notiflix from 'notiflix';
import axios from 'axios';
const API_URL = 'https://pixabay.com/api/';
const API_KEY = '28143013-44919de38ad9e5402793063fb';

// function createApiObjects() {
//   new apiObject({
//     key: API_KEY,
//     q: keyWord,
//     image_type: photo,
//     orientation: horizontal,
//     safesearch: true,
//     page: currentPage,
//     per_page: defaultPerPage,
//   });
// }
// createApiObjects();

//1. pobrac fetcha z pixabay - zwróci tablicę
//2.

// export async function fetchImages() {
//   try {
//     const response = await axios.get(
//       '${API_URL}?API_KEY=${API_KEY}&q=${keyWord}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}'
//       //  'API_URL + ? + createApiObjects()'
//     );
//     console.log(response);
//   } catch (error) {
//     console.error('Error:' + error);
//   }
// }

// export async function fetchImages() {
//   // pobiera dane z serwera w formacie JSON za pomocą metody fetch()
//   return await fetch(
//     `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,flags,languages`
//   )
//     .then(response => {
//       if (response.status === 404) {
//         throw new Error(404);
//       }
//       // przekazuje obietnicę której wynikiem będzie tablica krajów będącą wynikiem żądania
//       // metoda response.json() przetwarza odpowiedź i zwraca obiekt js jako tablicę krajów.
//       return response.json();
//     })
//     .catch(error =>
//       Notiflix.Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       )
//     );
// }
