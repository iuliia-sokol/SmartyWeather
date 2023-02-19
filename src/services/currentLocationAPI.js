import Geocode from 'react-geocode';
import {
  PLACES_KEY,
  // GOOGLE_MAPS_URL,
  // ABSTRACT_API_URL,
  // TIMEZONE_API_KEY
} from 'utils/consts/consts';

Geocode.setApiKey(PLACES_KEY);

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

// export const getCityId = async (lat, long) => {
//   const url = `${GOOGLE_MAPS_URL}place/nearbysearch/json?location=${lat},${long}&radius=10000&key=${PLACES_KEY}`;
//   try {
//     const data = await fetch(url);
//     const jsondata = await data.json();
//     // console.log(jsondata);
//     return jsondata;
//   } catch (err) {
//     console.log(err);
//   }
// };

// GET TIMEZONE

// export const getTimezone = async (lat, long) => {
//   const url = `${ABSTRACT_API_URL}current_time?api_key=${TIMEZONE_API}&location=${lat},${long}`;
//   try {
//     const { data } = await axios.get(url);
//     // console.log(data);
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };
