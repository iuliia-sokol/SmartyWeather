import { createSlice } from '@reduxjs/toolkit';

import {
  fetchCity,
  fetchPexelsImage,
  fetchCurrentWeather,
  fetchCurrentWeatherFromWeatherApi,
  fetchWeatherForecastFromWeatherApi,
  fetchAstroDataFromWeatherApi,
  fetchAirQuality,
  fetchHistory,
  // fetchCityID,
  // fetchTimezone,
  // fetchPixabayImage,
} from './locOperations';

const onPending = state => {
  state.isLoading = true;
};

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    latitude: null,
    longitude: null,
    city: null,
    country: null,
    cityID: null,
    timezone: null,
    weather: null,
    weatherAdditional: null,
    weatherForecast: null,
    astrodata: null,
    daytime: false,
    airdata: null,
    image: [],
    history: [],
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
        state.isLoading = false;
        state.city = payload.cityName;
        state.cityID = payload.placeId;
        state.country = payload.country;
      })
      .addCase(fetchCity.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchPexelsImage.pending, onPending)
      .addCase(fetchPexelsImage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.image = payload;
      })
      .addCase(fetchPexelsImage.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchCurrentWeather.pending, onPending)
      .addCase(fetchCurrentWeather.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.weather = payload;
      })
      .addCase(fetchCurrentWeather.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchCurrentWeatherFromWeatherApi.pending, onPending)
      .addCase(
        fetchCurrentWeatherFromWeatherApi.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.weatherAdditional = payload.current;
          state.timezone = payload.location.tz_id;
          state.daytime = payload.current.is_day;
          state.airdata = { ...state.airdata, ...payload.current.air_quality };
        }
      )
      .addCase(
        fetchCurrentWeatherFromWeatherApi.rejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addCase(fetchWeatherForecastFromWeatherApi.pending, onPending)
      .addCase(
        fetchWeatherForecastFromWeatherApi.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.weatherForecast = payload;
        }
      )
      .addCase(
        fetchWeatherForecastFromWeatherApi.rejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addCase(fetchAstroDataFromWeatherApi.pending, onPending)
      .addCase(fetchAstroDataFromWeatherApi.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.astrodata = payload;
      })
      .addCase(fetchAstroDataFromWeatherApi.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchAirQuality.pending, onPending)
      .addCase(fetchAirQuality.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.airdata = { ...state.airdata, ...payload };
      })
      .addCase(fetchAirQuality.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchHistory.pending, onPending)
      .addCase(fetchHistory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.history = payload.data.Events;
      })
      .addCase(fetchHistory.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setLongitude } = locationSlice.actions;
export const { setLatitude } = locationSlice.actions;

export default locationSlice.reducer;

// .addCase(fetchCityID.pending, onPending)
// .addCase(fetchCityID.fulfilled, (state, { payload }) => {
//   console.log(payload);
//   state.isLoading = false;
//   state.cityID = payload;
// })
// .addCase(fetchCityID.rejected, (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// })
// .addCase(fetchPixabayImage.pending, onPending)
// .addCase(fetchPixabayImage.fulfilled, (state, { payload }) => {
//   state.isLoading = false;
//   state.image = payload;
// })
// .addCase(fetchPixabayImage.rejected, (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// })
// .addCase(fetchTimezone.pending, onPending)
// .addCase(fetchTimezone.fulfilled, (state, { payload }) => {
//   state.isLoading = false;
//   state.timezone = payload;
// })
// .addCase(fetchTimezone.rejected, (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// })
