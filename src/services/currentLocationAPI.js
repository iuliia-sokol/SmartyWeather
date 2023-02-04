import Geocode from 'react-geocode';
import axios from 'axios';
import Notiflix from 'notiflix';
import { createClient } from 'pexels';
import { notifySettings } from 'utils/notifySettings';

const PLACES_TOKEN = process.env.REACT_APP_MAP_API_KEY;
const PEXELS_KEY = process.env.REACT_APP_PEXELS_API_KEY;
const PIXABAY_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
const TIMEZONE_API = process.env.REACT_APP_TIMEZONE_API;

const client = createClient(PEXELS_KEY);
Geocode.setApiKey(PLACES_TOKEN);

// const proxy = 'https://cors-anywhere.herokuapp.com/';  ---- service currently has request limitations

export const getCity = async (lat, long) => {
  let city = {
    cityName: null,
    country: null,
    placeId: null,
  };
  try {
    const response = await Geocode.fromLatLng(`${lat}`, `${long}`);
    const approximate = response.results.filter(
      res => res.geometry.location_type === 'APPROXIMATE'
    );

    city.placeId = approximate[0].place_id;
    console.log(city);

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
          case 'country':
            city.country = response.results[0].address_components[i].long_name;
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

// ANOTHER WAY TO GET PLACE ID FROM GOOGLE

export const getCityId = async (lat, long) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=10000&key=${PLACES_TOKEN}`;
  try {
    const data = await fetch(url);
    const jsondata = await data.json();
    // console.log(jsondata);
    return jsondata;
  } catch (err) {
    console.log(err);
  }
};

export const getTimezone = async (lat, long) => {
  const url = `https://timezone.abstractapi.com/v1/current_time?api_key=${TIMEZONE_API}&location=${lat},${long}`;
  try {
    const { data } = await axios.get(url);
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// USED IMAGES API

export async function getCityImagePexels(query) {
  return await client.photos
    .search({ query, orientation: 'landscape' })
    .then(photos => {
      const result = photos.photos;
      // console.log(result);
      return result;
    });
}

// ALTERNATIVE API FOR FETCHING IMAGES

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
