import axios from 'axios';

axios.defaults.baseURL = 'https://api.open-meteo.com/v1';
export const getCurrentWeather = async (lat, long, timezone) => {
  try {
    const { data } = await axios.get(
      `forecast?latitude=${lat}&longitude=${long}&timezone=${timezone}&hourly=temperature_2m,precipitation,rain,showers,snowfall,snow_depth,weathercode,surface_pressure,cloudcover,visibility,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum&current_weather=true`
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
