import axios from 'axios';
import {
  PEXELS_KEY,
  PEXELS_URL,
  // PIXABAY_KEY,
  // PIXABAY_URL,
  // GOOGLE_MAPS_URL,
  // PLACES_KEY,
} from 'utils/consts/consts';
// import Notiflix from 'notiflix';
// import { notifySettings } from 'utils/notifySettings';

export async function getImagePexels(query) {
  const searchParams = new URLSearchParams({
    query: query,
    orientation: 'landscape',
  });
  const response = await axios.get(
    `${PEXELS_URL}${searchParams},{
  headers: {
    Authorization: ${PEXELS_KEY}
  }
}`
  );
  if (response.status === 404) {
    console.log('No pics found for this place', response);
    // Notiflix.Notify.failure('No pics found for this place', notifySettings);
    return Promise.reject();
  }
  return response.data.photos;
}

// ALTERNATIVE API FOR FETCHING IMAGES

// export async function getCityImagePixabay(searchQuery) {
//   const searchParams = new URLSearchParams({
//     key: PIXABAY_KEY,
//     q: searchQuery,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     category: 'travel',
//     page: 1,
//     per_page: 12,
//   });
//   const url = `${PIXABAY_URL}${searchParams}`;
//   const response = await axios.get(url);
//   if (response.status === 404) {
//     Notiflix.Notify.failure(
//       'Oops, no pics found. Please try again',
//       notifySettings
//     );
//     return Promise.reject();
//   }
//   return response;
// }

// BELOW IS A WAY TO GET PLACE'S IMAGES FROM GOOGLE
// THE METHOD IS LEFT HERE JUST IN CASE BUT WAS NOT ACTUALLY USED DUE TO THE CORS PROBLEMS
// FOR FETCHING IMAGES DIRECTLY FROM GOOGLE API YOU NEED TO ADJUST YOUR OWN PROXY SERVER FIRST

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // ---- service currently has request limitations
// const proxy = 'https://api.allorigins.win/get?url='; //  ---- service is currently working, but permorming too slow

// export const getImage = async id => {
//   const url = `${GOOGLE_MAPS_URL}place/details/json?place_id=${id}&key=${PLACES_KEY}`;
//   try {
//     const response = await fetch(`${proxy}${encodeURIComponent(`${url}`)}`);
//     const result = await response.json();
//     const data = JSON.parse(result.contents);
//     const photoRef = data.result.photos[0].photo_reference;

//     let imageSrc;
//     if (photoRef) {
//       const imageLookupURL = `${GOOGLE_MAPS_URL}place/photo?photoreference=${photoRef}&photo_reference=${photoRef}&key=${PLACES_KEY}&maxwidth=2400&maxheight=1200`;

//       const imageURLQuery = await fetch(
//         `${proxy}${encodeURIComponent(`${imageLookupURL}`)}`
//       );

//       const res = await imageURLQuery.json();
//       imageSrc = res.status.url;
//     }
//     return imageSrc;
//   } catch (error) {
//     console.log(error);
//   }
// };
