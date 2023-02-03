import { CardUI } from 'components/Card/Card';
import { Container } from 'components/Container/Container';
import { WeatherUI } from 'components/WeatherBox/WeatherBox';
import { useEffect } from 'react';
import { useGeolocated } from 'react-geolocated';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCity, fetchTimezone } from 'redux/location/locOperations';
import {
  getCityName,
  getCurrentLatitude,
  getCurrentLongitude,
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
  const city = useSelector(getCityName);

  useEffect(() => {
    if (coords) {
      dispatch(setLatitude(coords.latitude.toFixed(2)));
      dispatch(setLongitude(coords.longitude.toFixed(2)));
      dispatch(fetchCity());
      dispatch(fetchTimezone());
    }
    return;
  }, [coords, dispatch]);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : latitude && longitude ? (
    <>
      <CardUI />
      <Container>
        <table>
          <tbody>
            <tr>
              <td>latitude</td>
              <td>{latitude}</td>
            </tr>
            <tr>
              <td>longitude</td>
              <td>{longitude}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{city}</td>
            </tr>
          </tbody>
        </table>
        <WeatherUI />
      </Container>
    </>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default Homepage;
