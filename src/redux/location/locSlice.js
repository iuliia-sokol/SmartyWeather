import { createSlice } from '@reduxjs/toolkit';
// import Notiflix from 'notiflix';
// import { notifySettings } from '../../utils/notifySettings';
import { fetchCity } from './locOperations';

const onPending = state => {
  state.isLoading = true;
};

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    latitude: null,
    longitude: null,
    city: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setLatitude: (state, { payload }) => ({
      ...state,
      latitude: payload,
    }),
    setLongitude: (state, { payload }) => ({
      ...state,
      longitude: payload,
    }),
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCity.pending, onPending)
      .addCase(fetchCity.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.city = payload;
      })
      .addCase(fetchCity.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setLongitude } = locationSlice.actions;
export const { setLatitude } = locationSlice.actions;

export default locationSlice.reducer;
