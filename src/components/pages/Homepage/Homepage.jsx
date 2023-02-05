import { CardUI } from 'components/Card/Card';
import { Container } from 'components/Container/Container';
import { MainBoxUI } from 'components/MainBox/MainBox';
import { useEffect } from 'react';
import { useGeolocated } from 'react-geolocated';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAstroDataFromWeatherApi,
  fetchCity,
  fetchCurrentWeather,
  fetchCurrentWeatherFromWeatherApi,
  fetchWeatherForecastFromWeatherApi,
} from 'redux/location/locOperations';
import {
  getAdditionalCurrentWeather,
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
  const weather = useSelector(getCurrentWeather);
  const extraWeather = useSelector(getAdditionalCurrentWeather);

  useEffect(() => {
    if (coords) {
      dispatch(setLatitude(coords.latitude));
      dispatch(setLongitude(coords.longitude));
      dispatch(fetchCity());

      // ----------check exact coordinates
      // dispatch(setLatitude(48.33));
      // dispatch(setLongitude(34.77));

      // dispatch(fetchTimezone());
    }
    return;
  }, [coords, dispatch]);

  useEffect(() => {
    if (extraWeather) {
      return;
    }
    if (coords) {
      dispatch(fetchAstroDataFromWeatherApi());
      dispatch(fetchCurrentWeatherFromWeatherApi());
      dispatch(fetchWeatherForecastFromWeatherApi());
    }
  }, [dispatch, extraWeather, coords]);

  useEffect(() => {
    if (weather) {
      return;
    }
    if (timezone) {
      dispatch(fetchCurrentWeather());
    }
  }, [dispatch, timezone, weather]);

  return (
    <main>
      <CardUI />
      <Container>
        {!isGeolocationAvailable ? (
          <div>Your browser does not support Geolocation</div>
        ) : !isGeolocationEnabled ? (
          <div>Geolocation is not enabled</div>
        ) : latitude && longitude ? (
          <MainBoxUI />
        ) : (
          <div>Loading...</div>
        )}
      </Container>
    </main>
  );
};

export default Homepage;
