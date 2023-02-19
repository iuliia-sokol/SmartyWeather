import axios from 'axios';
import {
  OPEN_METEO_AIR_URL,
  OPEN_METEO_URL,
  WEATHER_API_URL,
  WEATHER_KEY,
} from 'utils/consts/consts';

export const getCurrentWeatherFromWeatherApi = async (lat, long) => {
  axios.defaults.baseURL = WEATHER_API_URL;

  try {
    const { data } = await axios.get(
      `/current.json?key=${WEATHER_KEY}&q=${lat},${long}&aqi=yes`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// IF WEATHER FORCAST NEEDED: for free mode 3 day city and town weather are available. Daily and Hourly.

export const getWeatherForecastFromWeatherApi = async (lat, long) => {
  axios.defaults.baseURL = WEATHER_API_URL;
  try {
    const { data } = await axios.get(
      `/forecast.json?key=${WEATHER_KEY}&q=${lat},${long}&aqi=yes&days=3`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAstroDataFromWeatherApi = async (lat, long) => {
  axios.defaults.baseURL = WEATHER_API_URL;
  try {
    const { data } = await axios.get(
      `/astronomy.json?key=${WEATHER_KEY}&q=${lat},${long}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentWeather = async (lat, long, timezone) => {
  axios.defaults.baseURL = OPEN_METEO_URL;
  try {
    const { data } = await axios.get(
      `forecast?latitude=${lat}&longitude=${long}&timezone=${timezone}&hourly=temperature_2m,precipitation,rain,showers,snowfall,snow_depth,weathercode,surface_pressure,cloudcover,visibility,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum&current_weather=true`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAirQuality = async (lat, long, timezone) => {
  axios.defaults.baseURL = OPEN_METEO_AIR_URL;
  try {
    const { data } = await axios.get(
      `air-quality?latitude=${lat}&longitude=${long}&timezone=${timezone}&hourly=dust,alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen,european_aqi,us_aqi`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
