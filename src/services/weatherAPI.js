import axios from 'axios';

const WEATHER_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getCurrentWeatherFromWeatherApi = async (lat, long) => {
  axios.defaults.baseURL = 'http://api.weatherapi.com/v1';
  try {
    const { data } = await axios.get(
      `/current.json?key=${WEATHER_KEY}&q=${lat},${long}&aqi=yes`
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// IF WEATHER FORCAST NEEDED: for free mode 3 day city and town weather are available. Daily and Hourly.

export const getWeatherForecastFromWeatherApi = async (lat, long) => {
  axios.defaults.baseURL = 'http://api.weatherapi.com/v1';
  try {
    const { data } = await axios.get(
      `/forecast.json?key=${WEATHER_KEY}&q=${lat},${long}&aqi=yes`
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAstroDataFromWeatherApi = async (lat, long) => {
  axios.defaults.baseURL = 'http://api.weatherapi.com/v1';
  try {
    const { data } = await axios.get(
      `/astronomy.json?key=${WEATHER_KEY}&q=${lat},${long}`
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentWeather = async (lat, long, timezone) => {
  axios.defaults.baseURL = 'https://api.open-meteo.com/v1';
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
