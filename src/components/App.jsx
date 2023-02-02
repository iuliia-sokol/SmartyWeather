import React from 'react';
import { useEffect } from 'react';
import { useGeolocated } from 'react-geolocated';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCity } from 'redux/location/locOperations';
import {
  getCityName,
  getCurrentLatitude,
  getCurrentLongitude,
} from 'redux/location/locSelectors';
import { setLatitude, setLongitude } from 'redux/location/locSlice';

import { CardUI } from './Card/Card';
import { Container } from './Container/Container';

export const App = () => {
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
      dispatch(setLatitude(coords.latitude));
      dispatch(setLongitude(coords.longitude));
      dispatch(fetchCity());
    }
    return;
  }, [coords, dispatch]);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : latitude && longitude ? (
    <main>
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
      </Container>
    </main>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};
