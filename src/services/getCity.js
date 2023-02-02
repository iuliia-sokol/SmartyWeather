import Geocode from 'react-geocode';
import axios from 'axios';
import Notiflix from 'notiflix';
import { createClient } from 'pexels';

const PLACES_TOKEN = process.env.REACT_APP_MAP_API_KEY;
const PEXELS_KEY = process.env.REACT_APP_PEXELS_API_KEY;
const PIXABAY_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

const client = createClient(PEXELS_KEY);
// const proxy = 'https://cors-anywhere.herokuapp.com/';

Geocode.setApiKey(PLACES_TOKEN);

export const getCity = async (lat, long) => {
  let city = {
    cityName: null,
    placeId: null,
  };
  try {
    const response = await Geocode.fromLatLng(`${lat}`, `${long}`);
    const approximate = response.results.filter(
      res => res.geometry.location_type === 'APPROXIMATE'
    );

    city.placeId = approximate[0].place_id;

    for (let i = 0; i < response.results[0].address_components.length; i++) {
      for (
        let j = 0;
        j < response.results[0].address_components[i].types.length;
        j++
      ) {
        switch (response.results[0].address_components[i].types[j]) {
          case 'locality':
            city.cityName = response.results[0].address_components[i].long_name;
            break;
          default:
        }
      }
    }
    return city;
  } catch (error) {
    console.log(error);
  }
  return city;
};

export const getCityId = async (lat, long) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=10000&key=${PLACES_TOKEN}`;
  try {
    const data = await fetch(url);
    const jsondata = await data.json();
    console.log(jsondata);
    return jsondata;
  } catch (err) {
    console.log(err);
  }
};

export const notifySettings = {
  width: '380px',
  position: 'right-top',
  distance: '10px',
  opacity: 1,
  fontSize: '20px',
  borderRadius: '12px',
};

export async function getCityImagePexels(query) {
  return await client.photos
    .search({ query, orientation: 'landscape' })
    .then(photos => {
      const result = photos.photos;
      // console.log(result);
      return result;
    });
}

export async function getCityImagePixabay(searchQuery) {
  const searchParams = new URLSearchParams({
    key: PIXABAY_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    category: 'travel',
    page: 1,
    per_page: 12,
  });

  const url = `https://pixabay.com/api/?${searchParams}`;

  const response = await axios.get(url);
  if (response.status === 404) {
    Notiflix.Notify.failure(
      'Oops, no pics found. Please try again',
      notifySettings
    );
    return Promise.reject();
  }
  return response;
}

// const updateImageAndWeather = async ({ id, name, state }, dispatch) => {
//   //Placeholder image to use as a fallback
//   let fallbackImage = 'https://i.imgur.com/YXdssOR.jpeg';

//   // All requests to Google Places are routed thru this proxy to circumvent CORS issues
//   const proxyURL = 'https://cors-anywhere-citrics.herokuapp.com/';

//   // Initial places lookup request gives the photo ref and lat/lon for the given city
//   const placesLookupURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${name} ${state}&key=${process.env.REACT_APP_PLACES_API_KEY}&inputtype=textquery&fields=name,photos,geometry`;
//   const initialQuery = await axios
//     //must use proxy here to avoid CORS error
//     .get(proxyURL + placesLookupURL)
//     .then(r => r?.data?.candidates?.[0])
//     .catch(console.error);

//   // If we succeeded in getting a photo ref, get the image
//   // if it failed, image will instead be the placeholder above
//   const photoRef = initialQuery?.photos?.[0]?.photo_reference;
//   if (photoRef) {
//     const imageLookupURL = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRef}&key=${process.env.REACT_APP_PLACES_API_KEY}&maxwidth=700&maxheight=700`;
//     fetch(proxyURL + imageLookupURL)
//       .then(r => r?.blob())
//       .then(r => (r ? URL.createObjectURL(r) : fallbackImage))
//       .then(image => dispatch(updateCityDetails(id, { image })))
//       .catch(console.error);
//   } else {
//     // If the places query failed, use the fallback image
//     dispatch(updateCityDetails(id, { image: fallbackImage }));
//   }

//   // Open weather api using Lat and Lng points for more accurate search
//   const geoLocation = initialQuery?.geometry?.location;
//   if (geoLocation) {
//     axios
//       .get(
//         `https://api.openweathermap.org/data/2.5/onecall?lat=${geoLocation.lat}&lon=${geoLocation.lng}&exclude=minutely,hourly,daily&units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`
//       )
//       .then(r => r?.data)
//       .then(currentWeather => {
//         dispatch(updateCityDetails(id, { currentWeather }));
//       })
//       .catch(console.error);
//   }
// };
