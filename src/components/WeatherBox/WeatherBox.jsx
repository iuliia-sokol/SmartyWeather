import { Indicator, IndicatorText } from 'components/MainBox/MainBox.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  getAdditionalCurrentWeather,
  getCurrentWeather,
} from 'redux/location/locSelectors';
import { WeatherWrapper, IndicatorsWrapper } from './WeatherBox.styled';
import hot from '../../images/hot-min.png';
import cold from '../../images/cold-min.png';
import clouds from '../../images/cloud-min.png';
import windrose from '../../images/wind-rose-min.png';
import windBlow from '../../images/dashing-away-min.png';
import windSocket from '../../images/windsock-min.png';
import pressure from '../../images/pressure-min.png';
import uv from '../../images/uv-index-min.png';
import radio from '../../images/optical-radiation-min.png';
import { IndicatorImg } from 'components/AstroBox/AstroBox.styled';

export const WeatherUI = () => {
  const weather = useSelector(getCurrentWeather);
  const extraWeather = useSelector(getAdditionalCurrentWeather);

  return weather && extraWeather ? (
    <WeatherWrapper>
      <IndicatorsWrapper>
        <Indicator>
          {/* <TbTemperaturePlus /> */}
          <IndicatorImg src={hot} alt="Max temperature" loading="lazy" />
          <IndicatorText>Max temperature:</IndicatorText>
          <span>{weather.daily.temperature_2m_max[0]} °C</span>
        </Indicator>
        <Indicator>
          {/* <TbTemperatureMinus /> */}
          <IndicatorImg src={cold} alt="Min temperature" loading="lazy" />
          <IndicatorText>Min temperature:</IndicatorText>
          <span>{weather.daily.temperature_2m_min[0]} °C</span>
        </Indicator>
        <Indicator>
          {/* <BsClouds /> */}
          <IndicatorImg src={clouds} alt="clouds" loading="lazy" />
          <IndicatorText>Clouds:</IndicatorText>
          <span>{extraWeather.cloud} %</span>
        </Indicator>
        <Indicator>
          {/* <TbWindmill /> */}
          <IndicatorImg src={windBlow} alt="wind gusts" loading="lazy" />
          <IndicatorText>Max windgusts:</IndicatorText>
          <span>{weather.daily.windgusts_10m_max[0]} km/h</span>
        </Indicator>
        <Indicator>
          {/* <BsWind /> */}
          <IndicatorImg src={windSocket} alt="windspeed" loading="lazy" />
          <IndicatorText>Max windspeed:</IndicatorText>
          <span>{weather.daily.windspeed_10m_max[0]} km/h</span>
        </Indicator>
        <Indicator>
          {/* <WiWindDeg /> */}
          <IndicatorImg src={windrose} alt="wind direction" loading="lazy" />
          <IndicatorText>Wind direction:</IndicatorText>
          <span>{extraWeather.wind_dir}</span>
        </Indicator>
        <Indicator>
          {/* <WiBarometer /> */}
          <IndicatorImg src={pressure} alt="pressure" loading="lazy" />
          <IndicatorText>Pressure:</IndicatorText>
          <span>{extraWeather.pressure_mb} millibars</span>
        </Indicator>
        <Indicator>
          {/* <GiSunRadiations /> */}
          <IndicatorImg src={radio} alt="Shortwave radiation" loading="lazy" />
          <IndicatorText>Shortwave radiation:</IndicatorText>
          <span>{weather.daily.shortwave_radiation_sum[0]} MJ/m²</span>
        </Indicator>
        <Indicator>
          {/* <GiStripedSun /> */}
          <IndicatorImg src={uv} alt="UV index" loading="lazy" />
          <IndicatorText>UV:</IndicatorText>
          <span>Index {extraWeather.uv} </span>
        </Indicator>
      </IndicatorsWrapper>
    </WeatherWrapper>
  ) : (
    <div>No weather data available</div>
  );
};
