// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import Notiflix from 'notiflix';
// import { notifySettings } from '../../utils/notifySettings';
import {
  getCity,
  getCityId,
  getCityImagePexels,
  getCityImagePixabay,
} from 'services/currentLocationAPI';

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
  async (_, { getState, rejectWithValue }) => {
    try {
      const { location } = getState();
      const data = await getCityImagePexels(`${location.city}`);
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
