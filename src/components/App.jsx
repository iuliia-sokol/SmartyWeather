import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useGeolocated } from 'react-geolocated';

const PLACES_TOKEN = process.env.REACT_APP_MAP_API_KEY;
console.log(PLACES_TOKEN);

export const App = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },

      userDecisionTimeout: undefined,
      suppressLocationOnMount: false,
    });

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    if (coords) {
      setLatitude(coords.latitude);
      setLongitude(coords.longitude);
    }
    return;
  }, [coords]);

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
      </tbody>
    </table>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};
