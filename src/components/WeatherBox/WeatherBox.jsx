import { Indicator } from 'components/MainBox/MainBox.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  getAdditionalCurrentWeather,
  getCurrentWeather,
} from 'redux/location/locSelectors';
import { WeatherWrapper, IndicatorsWrapper } from './WeatherBox.styled';

export const WeatherUI = () => {
  const weather = useSelector(getCurrentWeather);
  const extraWeather = useSelector(getAdditionalCurrentWeather);

  // console.log(weather);
  // console.log(extraWeather);

  return weather && extraWeather ? (
    <WeatherWrapper>
      <IndicatorsWrapper>
        <Indicator>
          Max temperature:
          <span>{weather.daily.temperature_2m_max[0]} °C</span>
        </Indicator>
        <Indicator>
          Min temperature:
          <span>{weather.daily.temperature_2m_min[0]} °C</span>
        </Indicator>
        <Indicator>
          Clouds:
          <span>{extraWeather.cloud} %</span>
        </Indicator>

        <Indicator>
          Max windgusts:
          <span>{weather.daily.windgusts_10m_max[0]} km/h</span>
        </Indicator>
        <Indicator>
          Max windspeed:
          <span>{weather.daily.windspeed_10m_max[0]} km/h</span>
        </Indicator>
        <Indicator>
          Wind direction:
          <span>{extraWeather.wind_dir}</span>
        </Indicator>
        <Indicator>
          Pressure:
          <span>{extraWeather.pressure_mb} millibars</span>
        </Indicator>
        <Indicator>
          Shortwave radiation:
          <span>{weather.daily.shortwave_radiation_sum[0]} MJ/m²</span>
        </Indicator>
        <Indicator>
          UV:
          <span>Index {extraWeather.uv} </span>
        </Indicator>
      </IndicatorsWrapper>
    </WeatherWrapper>
  ) : (
    <div>No weather data available</div>
  );
};
