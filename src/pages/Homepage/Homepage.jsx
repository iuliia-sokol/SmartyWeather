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
  getCurrentWeather,
  getTimezone,
} from 'redux/location/locSelectors';
import { setLatitude, setLongitude } from 'redux/location/locSlice';

const Homepage = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },

      userDecisionTimeout: undefined,
      suppressLocationOnMount: false,
    });

  const dispatch = useDispatch();
  const latitude = useSelector(getCurrentLatitude);
  const longitude = useSelector(getCurrentLongitude);
  const timezone = useSelector(getTimezone);
  const city = useSelector(getCityName);
  const images = useSelector(getCityImages);
  const weather = useSelector(getCurrentWeather);
  const extraWeather = useSelector(getAdditionalCurrentWeather);

  useEffect(() => {
    if (coords) {
      dispatch(setLatitude(coords.latitude));
      dispatch(setLongitude(coords.longitude));
      dispatch(fetchCity());

      // dispatch(fetchTimezone());
    }
    if (!isGeolocationAvailable || !isGeolocationEnabled || !city) {
      dispatch(setLatitude(DEFAULT_LATITUDE));
      dispatch(setLongitude(DEFAULT_LONGITUDE));
      dispatch(fetchCity());
    }
    return;
  }, [city, coords, dispatch, isGeolocationAvailable, isGeolocationEnabled]);

  useEffect(() => {
    if (extraWeather) {
      return;
    }
    if (latitude && longitude) {
      dispatch(fetchAstroDataFromWeatherApi());
      dispatch(fetchCurrentWeatherFromWeatherApi());
      dispatch(fetchWeatherForecastFromWeatherApi());
    }
  }, [dispatch, extraWeather, latitude, longitude]);

  useEffect(() => {
    if (weather) {
      return;
    }
    if (timezone) {
      dispatch(fetchCurrentWeather());
      dispatch(fetchAirQuality());
    }
  }, [dispatch, timezone, weather]);

  useEffect(() => {
    if (city && images.length === 0) {
      dispatch(fetchPexelsImage(city));
    }
  }, [city, dispatch, images]);

  return (
    <main
      style={{
        minHeight: '70vh',
      }}
    >
      {city && <CardUI />}
      {!isGeolocationAvailable && (
        <TextLine text="Due to your browser does not support geolocation, the default location data is being shown. Please update your browser, allow the location access and turn on geolocation on your device." />
      )}
      {!isGeolocationEnabled && (
        <TextLine text="Due to the geolocation is not enabled on your device, the default location data is being shown. Please enable geolocation on your device to get your current location data." />
      )}
      <Container>
        {latitude && longitude ? (
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
