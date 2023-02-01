import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useGeolocated } from 'react-geolocated';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCity } from 'redux/location/locOperations';
import { setLatitude, setLongitude } from 'redux/location/locSlice';
// import { getCity } from 'services/getCityName';

export const App = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },

      userDecisionTimeout: undefined,
      suppressLocationOnMount: false,
    });

  // const [latitude, setLatitude] = useState('');
  // const [longitude, setLongitude] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (coords) {
      dispatch(setLatitude(coords.latitude));
      dispatch(setLongitude(coords.longitude));
      // getCity(coords.latitude, coords.longitude);
      dispatch(fetchCity());
    }
    return;
  }, [coords, dispatch]);

  const latitude = useSelector(state => state.location.latitude);
  const longitude = useSelector(state => state.location.longitude);
  const city = useSelector(state => state.location.city);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : latitude && longitude ? (
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
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};
