import Geocode from 'react-geocode';

const PLACES_TOKEN = process.env.REACT_APP_MAP_API_KEY;

Geocode.setApiKey(PLACES_TOKEN);

export const getCity = async (lat, long) => {
  let city = null;
  try {
    const response = await Geocode.fromLatLng(`${lat}`, `${long}`);
    for (let i = 0; i < response.results[0].address_components.length; i++) {
      for (
        let j = 0;
        j < response.results[0].address_components[i].types.length;
        j++
      ) {
        switch (response.results[0].address_components[i].types[j]) {
          case 'locality':
            city = response.results[0].address_components[i].long_name;
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
