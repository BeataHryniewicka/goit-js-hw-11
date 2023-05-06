import Notiflix from 'notiflix';
import axios from 'axios';
// const API_URL = `https://pixabay.com/api/`;
// const API_KEY = `36096089-8019a6978013fb7a12ca287ee`;
// const keyWord = inputEl.value;
// const defaultImgPerPage = 40;
// const page = 1;

// export async function fetchImages() {
//   try {
//     const response = await axios.get(
//       `${API_URL}?key=${API_KEY}&q=${keyWord}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${defaultImgPerPage}`
//     );
//     if (response.data.hits.lenght === 0) {
//       Notiflix.Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//     }
//     console.log(response.data.hits);
//     return response.data.hits;
//   } catch (error) {
//     console.error('Error:' + error);
//   }
// }
