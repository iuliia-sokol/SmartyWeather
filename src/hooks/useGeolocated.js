import { useGeolocated } from 'react-geolocated';

export function useCords() {
  const coords = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  return coords;
}

export function useIsGeolocationAvailable() {
  const isGeolocationAvailable = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  return isGeolocationAvailable;
}

export function useIsGeolocationEnabled() {
  const isGeolocationEnabled = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  return isGeolocationEnabled;
}
