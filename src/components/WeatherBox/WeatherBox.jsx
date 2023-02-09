import { Indicator, IndicatorText } from 'components/MainBox/MainBox.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  TbTemperaturePlus,
  TbTemperatureMinus,
  TbWindmill,
} from 'react-icons/tb';
import { BsClouds, BsWind } from 'react-icons/bs';
import { WiBarometer, WiWindDeg } from 'react-icons/wi';
import { GiSunRadiations, GiStripedSun } from 'react-icons/gi';
import {
  getAdditionalCurrentWeather,
  getCurrentWeather,
} from 'redux/location/locSelectors';
import { WeatherWrapper, IndicatorsWrapper } from './WeatherBox.styled';

export const WeatherUI = () => {
  const weather = useSelector(getCurrentWeather);
  const extraWeather = useSelector(getAdditionalCurrentWeather);

  return weather && extraWeather ? (
    <WeatherWrapper>
      <IndicatorsWrapper>
        <Indicator>
          <TbTemperaturePlus />
          <IndicatorText>Max temperature:</IndicatorText>
          <span>{weather.daily.temperature_2m_max[0]} °C</span>
        </Indicator>
        <Indicator>
          <TbTemperatureMinus />
          <IndicatorText>Min temperature:</IndicatorText>
          <span>{weather.daily.temperature_2m_min[0]} °C</span>
        </Indicator>
        <Indicator>
          <BsClouds />
          <IndicatorText>Clouds:</IndicatorText>
          <span>{extraWeather.cloud} %</span>
        </Indicator>
        <Indicator>
          <TbWindmill />
          <IndicatorText>Max windgusts:</IndicatorText>
          <span>{weather.daily.windgusts_10m_max[0]} km/h</span>
        </Indicator>
        <Indicator>
          <BsWind />
          <IndicatorText>Max windspeed:</IndicatorText>
          <span>{weather.daily.windspeed_10m_max[0]} km/h</span>
        </Indicator>
        <Indicator>
          <WiWindDeg />
          <IndicatorText>Wind direction:</IndicatorText>
          <span>{extraWeather.wind_dir}</span>
        </Indicator>
        <Indicator>
          <WiBarometer />
          <IndicatorText>Pressure:</IndicatorText>
          <span>{extraWeather.pressure_mb} millibars</span>
        </Indicator>
        <Indicator>
          <GiSunRadiations />
          <IndicatorText>Shortwave radiation:</IndicatorText>
          <span>{weather.daily.shortwave_radiation_sum[0]} MJ/m²</span>
        </Indicator>
        <Indicator>
          <GiStripedSun />
          <IndicatorText>UV:</IndicatorText>
          <span>Index {extraWeather.uv} </span>
        </Indicator>
      </IndicatorsWrapper>
    </WeatherWrapper>
  ) : (
    <div>No weather data available</div>
  );
};
