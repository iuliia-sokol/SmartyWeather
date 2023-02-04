import { CardUI } from 'components/Card/Card';
import { Container } from 'components/Container/Container';
import WeatherUI from 'components/WeatherBox/WeatherBox';
import { useState } from 'react';
import { useEffect } from 'react';
import { useGeolocated } from 'react-geolocated';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAstroDataFromWeatherApi,
  fetchCity,
  fetchCurrentWeather,
  fetchCurrentWeatherFromWeatherApi,
} from 'redux/location/locOperations';
import {
  getAdditionalCurrentWeather,
  getCityName,
  getCountry,
  getCurrentLatitude,
  getCurrentLongitude,
  getCurrentWeather,
  getTimezone,
} from 'redux/location/locSelectors';
import { setLatitude, setLongitude } from 'redux/location/locSlice';
import {
  CityName,
  DataWrapper,
  FeelsLike,
  Indicator,
  IndicatorsWrapper,
  NameIconWrapper,
  Temperature,
  TemperatureWrapper,
  WeatherConditions,
  WeatherDataWrapper,
  WeatherInfoWrapper,
} from './Homepage.styled';

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
  const timezone = useSelector(getTimezone);
  const weather = useSelector(getCurrentWeather);
  const extraWeather = useSelector(getAdditionalCurrentWeather);
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

  useEffect(() => {
    // dispatch(fetchWeatherForecastFromWeatherApi());
    if (weather && extraWeather) {
      return;
    }
    if (timezone) {
      dispatch(fetchCurrentWeather());
    }
    dispatch(fetchAstroDataFromWeatherApi());
    dispatch(fetchCurrentWeatherFromWeatherApi());
  }, [timezone, dispatch, weather, extraWeather]);

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
          <NameIconWrapper>
            <CityName>
              {city}, {country}
            </CityName>
          </NameIconWrapper>
          <WeatherDataWrapper>
            <WeatherInfoWrapper>
              <WeatherConditions>
                <span>{extraWeather.condition.text}</span>
              </WeatherConditions>
              <IndicatorsWrapper>
                <Indicator color="blue">
                  Precipitation:
                  <span>{weather.daily.precipitation_sum[0]} mm</span>
                </Indicator>
                <Indicator color="pink">
                  Humidity:
                  <span>{extraWeather.humidity} %</span>
                </Indicator>
                <Indicator color="violet">
                  Windspeed:
                  <span>{weather.current_weather.windspeed} km/h</span>
                </Indicator>
              </IndicatorsWrapper>
            </WeatherInfoWrapper>
            <TemperatureWrapper>
              <Temperature>
                {extraWeather.temp_c} <span>°C</span>
              </Temperature>

              <FeelsLike>Feels like {extraWeather.feelslike_c} °C</FeelsLike>
            </TemperatureWrapper>
          </WeatherDataWrapper>
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
