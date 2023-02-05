import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getAdditionalCurrentWeather,
  getCurrentWeather,
} from 'redux/location/locSelectors';
import { WeatherWrapper } from './WeatherBox.styled';
import AstroUI from '../AstroBox/AstroBox';

export const WeatherUI = () => {
  const weather = useSelector(getCurrentWeather);
  const extraWeather = useSelector(getAdditionalCurrentWeather);

  // console.log(weather);
  // console.log(extraWeather);

  const [showAstro, setShowAstro] = useState(false);

  const onShowAstroBtnClick = () => {
    setShowAstro(!showAstro);
  };

  return weather && extraWeather ? (
    <WeatherWrapper>
      <p>
        Max temperature:
        <span>{weather.daily.temperature_2m_max[0]} °C</span>
      </p>
      <p>
        Min temperature:
        <span>{weather.daily.temperature_2m_min[0]} °C</span>
      </p>
      <p>
        Clouds:
        <span>{extraWeather.cloud} %</span>
      </p>

      <p>
        Max windgusts:
        <span>{weather.daily.windgusts_10m_max[0]} km/h</span>
      </p>
      <p>
        Max windspeed:
        <span>{weather.daily.windspeed_10m_max[0]} km/h</span>
      </p>
      <p>
        Wind direction:
        <span>{extraWeather.wind_dir}</span>
      </p>
      <p>
        Pressure:
        <span>{extraWeather.pressure_mb} millibars</span>
      </p>
      <p>
        Shortwave radiation:
        <span>{weather.daily.shortwave_radiation_sum[0]} MJ/m²</span>
      </p>
      <p>
        UV:
        <span>Index {extraWeather.uv} </span>
      </p>
      <button type="button" onClick={onShowAstroBtnClick}>
        Display astrodata
      </button>
      {showAstro && <AstroUI />}
    </WeatherWrapper>
  ) : (
    <div>No weather data available</div>
  );
};
