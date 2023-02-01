const { default: axios } = require('axios');

const PLACES_TOKEN = process.env.REACT_APP_MAP_API_KEY;
// console.log(PLACES_TOKEN);

const city_state = 'paris';
let image;
const proxyUrl = 'https://my-cors-anywhere-deployment/';
const placesRequestUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${city_state}&key=${PLACES_TOKEN}&inputtype=textquery&fields=name,photos`;

const initialPlacesRequest = await axios
  .get(proxyUrl + placesRequestUrl)
  .catch(console.error);

const photoRef =
  initialPlacesRequest?.data?.candidates?.[0]?.photos?.[0]?.photo_reference;
// photoRef is the result of the initial Place Search query

if (photoRef) {
  const imageLookupURL = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRef}&key=${PLACES_TOKEN}&maxwidth=700&maxheight=700`;
  const imageURLQuery = await fetch(proxyURL + imageLookupURL)
    .then(r => r.blob())
    .catch(console.error);

  image = URL.createObjectURL(imageURLQuery); //declared earlier
}
// more code below adds the image URL to an entry in the Redux store

console.log(photoRef);
