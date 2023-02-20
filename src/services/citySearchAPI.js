import axios from 'axios';
import { OPEN_METEO_SEARCH_URL } from 'utils/consts/consts';

export const fetchCityByName = async query => {
  try {
    const res = await axios.get(
      `${OPEN_METEO_SEARCH_URL}?name=${query}&count=100`
    );
    return res.data.results;
  } catch (err) {
    console.log(`${err}: 'Unable to retrieve places'`);
  }
};
