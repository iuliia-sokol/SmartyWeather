import { CardUI } from 'components/Card/Card';
import { ChartsUI } from 'components/ChartBox/Charts';
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
  fetchWeatherForecastFromWeatherApi,
} from 'redux/location/locOperations';
import {
  getAdditionalCurrentWeather,
  getCityName,
  getCountry,
  getCurrentLatitude,
  getCurrentLongitude,
  getCurrentWeather,
  getDayTime,
  getTimezone,
} from 'redux/location/locSelectors';
import { setLatitude, setLongitude } from 'redux/location/locSlice';
import { conditionsWeatherApi } from 'utils/conditionsWeatherApi';
import {
  CityName,
  DataWrapper,
  FeelsLike,
  IconWrapper,
  Indicator,
  IndicatorsWrapper,
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
  const dayTime = useSelector(getDayTime);

  const [showWeather, setShowWeather] = useState(false);
  const [weatherPng, setWeatherPng] = useState(null);

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

  useEffect(() => {
    if (extraWeather) {
      const weatherCode = extraWeather.condition.code;
      const conditionPng = conditionsWeatherApi.find(
        cond => cond.code === weatherCode
      ).png;
      dayTime ? setWeatherPng(conditionPng[0]) : setWeatherPng(conditionPng[1]);
    }
  }, [dayTime, extraWeather]);

  const onWeatherBtnClick = () => {
    setShowWeather(!showWeather);
  };

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : latitude && longitude ? (
    <main>
      <CardUI />
      <Container>
        {weather && extraWeather ? (
          <DataWrapper>
            <WeatherDataWrapper>
              <IconWrapper>
                <img
                  src={weatherPng}
                  alt={extraWeather.condition.text}
                  loading="lazy"
                />
              </IconWrapper>

              <TemperatureWrapper>
                <CityName>
                  {city}, {country}
                </CityName>
                <Temperature>
                  {extraWeather.temp_c} <span>°C</span>
                </Temperature>

                <FeelsLike>Feels like {extraWeather.feelslike_c} °C</FeelsLike>
              </TemperatureWrapper>
            </WeatherDataWrapper>
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
              <ChartsUI />
            </WeatherInfoWrapper>
          </DataWrapper>
        ) : (
          <div>No data to display</div>
        )}

        <button type="button" onClick={onWeatherBtnClick}>
          Display weather
        </button>
        {showWeather && <WeatherUI />}
      </Container>
    </main>
  ) : (
    <div>Loading...</div>
  );
};

export default Homepage;
