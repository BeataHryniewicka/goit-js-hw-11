import Notiflix from 'notiflix';
import axios from 'axios';

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
