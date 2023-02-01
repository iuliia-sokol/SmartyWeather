// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import Notiflix from 'notiflix';
// import { notifySettings } from '../../utils/notifySettings';
import { getCity } from 'services/getCityName';

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

export const fetchImage = createAsyncThunk(
  'getCityImage',
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
