import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { HourlyChartsUI } from 'components/ChartBox/HourlyCharts';
import WeatherUI from 'components/WeatherBox/WeatherBox';
import AstroUI from 'components/AstroBox/AstroBox';
import AirUI from 'components/AirBox/AirBox';
import { ButtonUI } from 'components/Button/Button';
import { IndicatorText } from 'components/Indicator/Indicator.styled';
import { IndicatorUI } from 'components/Indicator/Indicator';

import {
  getAdditionalCurrentWeather,
  getCityName,
  getCountry,
  getCurrentWeather,
  getDayTime,
  getForcast,
} from 'redux/location/locSelectors';
import { conditionsWeatherApi } from 'utils/conditionsWeatherApi';
import {
  ChanceOfIndicator,
  CityName,
  DataWrapper,
  FeelsLike,
  IconWrapper,
  IndicatorsWrapper,
  Temperature,
  TemperatureWrapper,
  WeatherConditions,
  WeatherDataWrapper,
  WeatherInfoWrapper,
  ButtonsWrapper,
} from './MainBox.styled';

import termometrPlus from '../../images/thermomater-max-min.png';
import termometrMinus from '../../images/thermomater-min-min.png';
import percipitationImg from '../../images/percipitation-min.png';
import windImg from '../../images/wind-min.png';
import humidityImg from '../../images/humidity-min.png';
import rain from '../../images/rain-min.png';
import snow from '../../images/snow-min.png';
import { useMediaQuery } from 'hooks/useMedia';

export const MainBoxUI = () => {
  const weather = useSelector(getCurrentWeather);
  const extraWeather = useSelector(getAdditionalCurrentWeather);
  const forecast = useSelector(getForcast);
  const dayTime = useSelector(getDayTime);
  const city = useSelector(getCityName);
  const country = useSelector(getCountry);
  const isRowBased = useMediaQuery('(min-width: 768px)');

  const [showWeather, setShowWeather] = useState(false);
  const [showAstro, setShowAstro] = useState(false);
  const [showAir, setShowAir] = useState(false);
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
    setShowAstro(false);
    setShowAir(false);
  };

  const onShowAstroBtnClick = () => {
    setShowAstro(!showAstro);
    setShowAir(false);
    setShowWeather(false);
  };

  const onShowAirBtnClick = () => {
    setShowAir(!showAir);
    setShowAstro(false);
    setShowWeather(false);
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
              <WeatherConditions>
                <span>{extraWeather.condition.text}</span>
              </WeatherConditions>
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
              {/* <FeelsLike>
                Local time {weather.current_weather.time.slice(11)}
              </FeelsLike> */}
            </TemperatureWrapper>
          </WeatherDataWrapper>
          <WeatherInfoWrapper>
            <IndicatorsWrapper>
              <ChanceOfIndicator>
                <div>
                  <img src={rain} alt="rain" loading="lazy" />
                  <IndicatorText>Chance of rain:</IndicatorText>
                  <span>{forecast[0].day.daily_chance_of_rain} %</span>
                </div>
                <div>
                  <img src={snow} alt="snow" loading="lazy" />
                  <IndicatorText>Chance of snow:</IndicatorText>
                  <span>{forecast[0].day.daily_chance_of_snow} %</span>
                </div>
              </ChanceOfIndicator>
              <IndicatorUI
                color="blue"
                src={percipitationImg}
                text="Precipitation:"
                source={`${weather.daily.precipitation_sum[0]} mm`}
              />
              <IndicatorUI
                color="pink"
                src={humidityImg}
                text="Humidity:"
                source={`${extraWeather.humidity} %`}
              />

              <IndicatorUI
                color="violet"
                src={windImg}
                text="Windspeed:"
                source={`${weather.current_weather.windspeed} km/h`}
              />
            </IndicatorsWrapper>
            <HourlyChartsUI />
            <ButtonsWrapper>
              <li>
                <ButtonUI
                  type="button"
                  onClick={onWeatherBtnClick}
                  text="Details"
                  selected={showWeather}
                />
              </li>
              <li>
                <ButtonUI
                  type="button"
                  onClick={onShowAstroBtnClick}
                  text="Astro"
                  selected={showAstro}
                />
              </li>
              <li>
                <ButtonUI
                  type="button"
                  onClick={onShowAirBtnClick}
                  text={isRowBased ? 'Air quality' : 'Air'}
                  selected={showAir}
                />
              </li>
            </ButtonsWrapper>
          </WeatherInfoWrapper>
          {showWeather && <WeatherUI />}
          {showAstro && <AstroUI />}
          {showAir && <AirUI />}
        </>
      ) : (
        <div>No data to display</div>
      )}
    </DataWrapper>
  );
};
