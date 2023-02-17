import React from 'react';
import { useSelector } from 'react-redux';
import {
  getAdditionalCurrentWeather,
  getCurrentWeather,
  getForcast,
} from 'redux/location/locSelectors';

import { IndicatorUI } from 'components/Indicator/Indicator';
import { DailyChartsUI } from 'components/ChartBox/DailyCharts';
import { Subheader } from 'components/BoxSubheader/Subheader';
import { WrapperBox } from 'components/BoxWrapper/Wrapper';
import { ForecastUI } from 'components/ForecastBox/Forecast';
import { ForecastWrapper, IndicatorsWrapper } from './WeatherBox.styled';

import hot from '../../images/hot-min.png';
import cold from '../../images/cold-min.png';
import clouds from '../../images/cloud-min.png';
import windrose from '../../images/wind-rose-min.png';
import windBlow from '../../images/dashing-away-min.png';
import windSocket from '../../images/windsock-min.png';
import pressure from '../../images/pressure-min.png';
import uv from '../../images/uv-index-min.png';
import radio from '../../images/optical-radiation-min.png';

const WeatherUI = () => {
  const weather = useSelector(getCurrentWeather);
  const extraWeather = useSelector(getAdditionalCurrentWeather);
  const forecast = useSelector(getForcast);

  return weather && extraWeather ? (
    <WrapperBox>
      <Subheader text="Today's data" />
      <IndicatorsWrapper>
        <IndicatorUI
          src={hot}
          text="Max temperature:"
          source={`${weather.daily.temperature_2m_max[0]} °C`}
        />
        <IndicatorUI
          src={cold}
          text="Min temperature:"
          source={`${weather.daily.temperature_2m_min[0]} °C`}
        />
        <IndicatorUI
          src={clouds}
          text="Clouds:"
          source={`${extraWeather.cloud} %`}
        />
        <IndicatorUI
          src={windBlow}
          text="Max windgusts:"
          source={`${weather.daily.windgusts_10m_max[0]} km/h`}
        />
        <IndicatorUI
          src={windSocket}
          text="Max windspeed:"
          source={`${weather.daily.windspeed_10m_max[0]} km/h`}
        />
        <IndicatorUI
          src={windrose}
          text="Wind direction:"
          source={extraWeather.wind_dir}
        />
        <IndicatorUI
          src={pressure}
          text="Pressure:"
          source={`${extraWeather.pressure_mb} millibars`}
        />
        <IndicatorUI
          src={radio}
          text="Shortwave radiation:"
          source={`${weather.daily.shortwave_radiation_sum[0]} MJ/m²`}
        />
        <IndicatorUI src={uv} text="UV:" source={`Index ${extraWeather.uv}`} />
      </IndicatorsWrapper>
      <Subheader text="Next days forecast" />
      <ForecastWrapper>
        {forecast.map(el => {
          return (
            <ForecastUI
              key={el.date}
              date={el.date}
              humidity={el.day.avghumidity}
              percipitation={el.day.daily_will_it_rain}
              condition={el.day.condition.text}
              icon={el.day.condition.icon}
              temperature={el.day.avgtemp_c}
            />
          );
        })}
      </ForecastWrapper>
      <Subheader text="7-day forecast" />
      <DailyChartsUI />
    </WrapperBox>
  ) : (
    <div>No weather data available</div>
  );
};

export default React.memo(WeatherUI);
