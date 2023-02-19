import axios from 'axios';
import { HISTORY_API_URL } from 'utils/consts/consts';

export async function getHistoricalData() {
  const d = new Date();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const response = await axios.get(
    `${HISTORY_API_URL}/${month}/${day}/events.json`
  );
  if (response.status === 404) {
    console.log('No data found for this date', response);
    return Promise.reject();
  }
  return response.data;
}
