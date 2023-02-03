import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentWeather } from 'redux/location/locOperations';
import { getCurrentWeather, getTimezone } from 'redux/location/locSelectors';
import { WeatherWrapper } from './WeatherBox.styled';

export function WeatherUI() {
  const timezone = useSelector(getTimezone);
  const weather = useSelector(getCurrentWeather);
  console.log(weather);

  // const [weather, setWeather] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    if (timezone) {
      dispatch(fetchCurrentWeather());
    }
  }, [timezone, dispatch]);

  // useEffect(() => {}, []);

  return (
    weather && (
      <WeatherWrapper>
        <p>
          Weather conditions:
          <span>{weather.current_weather.weathercode}</span>
        </p>
        <p>
          Temperature:
          <span>{weather.current_weather.temperature} °C</span>
        </p>
        <p>
          Max temperature:
          <span>{weather.daily.temperature_2m_max[0]} °C</span>
        </p>
        <p>
          Min temperature:
          <span>{weather.daily.temperature_2m_min[0]} °C</span>
        </p>
        <p>
          Precipitation:
          <span>{weather.daily.precipitation_sum[0]} mm</span>
        </p>
        <p>
          Windspeed:
          <span>{weather.current_weather.windspeed} km/h</span>
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
          <span>{weather.current_weather.winddirection}°</span>
        </p>
        <p>
          Sunrise:
          <span>{weather.daily.sunrise[0]}</span>
        </p>
        <p>
          Sunset:
          <span>{weather.daily.sunset[0]}</span>
        </p>
        <p>
          Shortwave radiation:
          <span>{weather.daily.shortwave_radiation_sum[0]} MJ/m²</span>
        </p>
      </WeatherWrapper>
    )
  );
}
