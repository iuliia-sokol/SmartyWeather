// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import Notiflix from 'notiflix';
// import { notifySettings } from '../../utils/notifySettings';
import {
  getCity,
  getCityId,
  getCityImagePexels,
  getCityImagePixabay,
  // getTimezone,
} from 'services/currentLocationAPI';
import {
  getAstroDataFromWeatherApi,
  getCurrentWeather,
  getCurrentWeatherFromWeatherApi,
  getWeatherForecastFromWeatherApi,
} from 'services/weatherAPI';

export const fetchCity = createAsyncThunk(
  'getCity',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { location } = getState();
      const data = await getCity(location.latitude, location.longitude);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchCityID = createAsyncThunk(
  'getCityID',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { location } = getState();
      const result = await getCityId(location.latitude, location.longitude);
      console.log(result.results);
      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchPixabayImage = createAsyncThunk(
  'getCityImagePixabay',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { location } = getState();
      const { data } = await getCityImagePixabay(`${location.city}`);
      const images = data.hits;
      const cityImg = images.find(
        img => img.tags.includes('city') || img.tags.includes('nature')
      );
      return cityImg.largeImageURL;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchPexelsImage = createAsyncThunk(
  'getCityImagePexels',
  async (city, { rejectWithValue }) => {
    try {
      const data = await getCityImagePexels(city);
      if (data) {
        const pics = [];
        data.forEach(el => pics.push(el.src));
        return pics;
      }
      return;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// export const fetchTimezone = createAsyncThunk(
//   'getTimezone',
//   async (_, { getState, rejectWithValue }) => {
//     try {
//       const { location } = getState();
//       const result = await getTimezone(location.latitude, location.longitude);
//       // console.log(result);
//       return result.timezone_location;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);
//     }
//   }
// );

export const fetchCurrentWeather = createAsyncThunk(
  'getCurrentWeather',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { location } = getState();
      const result = await getCurrentWeather(
        +location.latitude,
        +location.longitude,
        location.timezone
      );
      // console.log(result.current_weather);
      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentWeatherFromWeatherApi = createAsyncThunk(
  'getCurrentWeatherAdditional',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { location } = getState();
      // console.log(location);
      const result = await getCurrentWeatherFromWeatherApi(
        location.latitude,
        location.longitude
      );
      // console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchWeatherForecastFromWeatherApi = createAsyncThunk(
  'getWeatherForecast',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { location } = getState();
      const result = await getWeatherForecastFromWeatherApi(
        location.latitude,
        location.longitude
      );
      // console.log('forecast', result);
      return result.forecast.forecastday;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchAstroDataFromWeatherApi = createAsyncThunk(
  'getAstrodata',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { location } = getState();
      const result = await getAstroDataFromWeatherApi(
        location.latitude,
        location.longitude
      );
      // console.log('astro', result);
      return result.astronomy.astro;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
