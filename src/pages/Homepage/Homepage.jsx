import { CardUI } from 'components/Card/Card';
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from 'utils/consts/consts';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { MainBoxUI } from 'components/MainBox/MainBox';
import { TextLine } from 'components/TextLine/TextLine';
import React, { useEffect } from 'react';
import { useGeolocated } from 'react-geolocated';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAirQuality,
  fetchAstroDataFromWeatherApi,
  fetchCity,
  fetchCurrentWeather,
  fetchCurrentWeatherFromWeatherApi,
  fetchPexelsImage,
  fetchWeatherForecastFromWeatherApi,
} from 'redux/location/locOperations';
import {
  getAdditionalCurrentWeather,
  getCityImages,
  getCityName,
  getCurrentLatitude,
  getCurrentLongitude,
  getTimezone,
  getCurrentWeather,
} from 'redux/location/locSelectors';
import {
  setInitState,
  setLatitude,
  setLongitude,
} from 'redux/location/locSlice';

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },

      userDecisionTimeout: undefined,
      suppressLocationOnMount: false,
    });

  const latitude = useSelector(getCurrentLatitude);
  const longitude = useSelector(getCurrentLongitude);
  const timezone = useSelector(getTimezone);
  const city = useSelector(getCityName);
  const weather = useSelector(getCurrentWeather);
  const extraWeather = useSelector(getAdditionalCurrentWeather);

  useEffect(() => {
    if (coords) {
      dispatch(setLatitude(coords.latitude));
      dispatch(setLongitude(coords.longitude));
      dispatch(fetchCity(coords.latitude, coords.longitude));
      dispatch(fetchAstroDataFromWeatherApi(coords.latitude, coords.longitude));
      dispatch(
        fetchCurrentWeatherFromWeatherApi(coords.latitude, coords.longitude)
      );
      dispatch(
        fetchWeatherForecastFromWeatherApi(coords.latitude, coords.longitude)
      );
    }
    if (!isGeolocationAvailable || !isGeolocationEnabled || !city) {
      dispatch(setLatitude(DEFAULT_LATITUDE));
      dispatch(setLongitude(DEFAULT_LONGITUDE));
      dispatch(fetchCity({ DEFAULT_LATITUDE, DEFAULT_LONGITUDE }));
      dispatch(
        fetchAstroDataFromWeatherApi({ DEFAULT_LATITUDE, DEFAULT_LONGITUDE })
      );
      dispatch(
        fetchCurrentWeatherFromWeatherApi({
          DEFAULT_LATITUDE,
          DEFAULT_LONGITUDE,
        })
      );
      dispatch(
        fetchWeatherForecastFromWeatherApi({
          DEFAULT_LATITUDE,
          DEFAULT_LONGITUDE,
        })
      );
    }
    return;
  }, [city, coords, dispatch, isGeolocationAvailable, isGeolocationEnabled]);

  useEffect(() => {
    if (extraWeather && timezone) {
      dispatch(fetchCurrentWeather({ latitude, longitude, timezone }));
      dispatch(fetchAirQuality({ latitude, longitude, timezone }));
    }
  }, [dispatch, extraWeather, latitude, longitude, timezone]);

  useEffect(() => {
    if (city) {
      dispatch(fetchPexelsImage(city));
    }
  }, [city, dispatch]);

  console.log(weather, extraWeather);

  return (
    <main
      style={{
        minHeight: '70vh',
      }}
    >
      {city && <CardUI selector={getCityImages} page="home" />}
      {!isGeolocationAvailable && (
        <TextLine text="Due to your browser does not support geolocation, the default location data is being shown. Please update your browser, allow the location access and turn on geolocation on your device." />
      )}
      {!isGeolocationEnabled && (
        <TextLine text="Due to the geolocation is not enabled on your device, the default location data is being shown. Please enable geolocation on your device to get your current location data." />
      )}
      <Container>
        {latitude && longitude && weather ? (
          <>
            <MainBoxUI />
          </>
        ) : (
          <div>
            <Loader />
          </div>
        )}
      </Container>
    </main>
  );
};

export default React.memo(Homepage);
