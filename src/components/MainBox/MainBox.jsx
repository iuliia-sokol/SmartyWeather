import { ChartsUI } from 'components/ChartBox/Charts';
import { WeatherUI } from 'components/WeatherBox/WeatherBox';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getAdditionalCurrentWeather,
  getCityName,
  getCountry,
  getCurrentWeather,
  getDayTime,
} from 'redux/location/locSelectors';
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
} from './MainBox.styled';

import termometrPlus from '../../images/thermomater-max-min.png';
import termometrMinus from '../../images/thermomater-min-min.png';

export const MainBoxUI = () => {
  const weather = useSelector(getCurrentWeather);
  const extraWeather = useSelector(getAdditionalCurrentWeather);
  const dayTime = useSelector(getDayTime);
  const city = useSelector(getCityName);
  const country = useSelector(getCountry);

  const [showWeather, setShowWeather] = useState(false);
  const [weatherPng, setWeatherPng] = useState(null);

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

  return (
    <DataWrapper>
      {weather && extraWeather ? (
        <>
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
                <img
                  src={
                    extraWeather.temp_c >= 0 ? termometrPlus : termometrMinus
                  }
                  alt="temperature"
                  loading="lazy"
                />
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
            <button type="button" onClick={onWeatherBtnClick}>
              Display weather
            </button>
          </WeatherInfoWrapper>
          {showWeather && <WeatherUI />}
        </>
      ) : (
        <div>No data to display</div>
      )}
    </DataWrapper>
  );
};
