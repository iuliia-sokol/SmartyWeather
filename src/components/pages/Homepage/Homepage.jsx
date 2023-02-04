import { CardUI } from 'components/Card/Card';
import { Container } from 'components/Container/Container';
import WeatherUI from 'components/WeatherBox/WeatherBox';
import { useState } from 'react';
import { useEffect } from 'react';
import { useGeolocated } from 'react-geolocated';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCity } from 'redux/location/locOperations';
import {
  getCityName,
  getCountry,
  getCurrentLatitude,
  getCurrentLongitude,
} from 'redux/location/locSelectors';
import { setLatitude, setLongitude } from 'redux/location/locSlice';
import { CityName, DataWrapper } from './Homepage.styled';

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
  const city = useSelector(getCityName);
  const country = useSelector(getCountry);
  const [showWeather, setShowWeather] = useState(false);

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

  const onWeatherBtnClick = () => {
    setShowWeather(!showWeather);
  };

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : latitude && longitude ? (
    <>
      <CardUI />
      <Container>
        <DataWrapper>
          <CityName>
            {city}, {country}
          </CityName>
        </DataWrapper>

        <button type="button" onClick={onWeatherBtnClick}>
          Display weather
        </button>
        {showWeather && <WeatherUI />}
      </Container>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Homepage;
