import axios from 'axios';
import { HISTORY_API_URL } from 'utils/consts/consts';

export async function getHistoricalData() {
  const response = await axios.get(`${HISTORY_API_URL}/2/18/events.json`);
  if (response.status === 404) {
    console.log('No data found for this date', response);
    // Notiflix.Notify.failure('No pics found for this place', notifySettings);
    return Promise.reject();
  }
  return response.data.events;
}
