import { useMediaQuery } from 'hooks/useMedia';
import { useSelector } from 'react-redux';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  // getDailyForcast,
  getHourlyForcast,
} from 'redux/location/locSelectors';
import { renderCustomAxisTick } from 'utils/customAxis';
import { CustomizedDot } from 'utils/customDot';
import { ChartsWrapper } from './Charts.styled';

export const ChartsUI = () => {
  // const dailyForecast = useSelector(getDailyForcast);
  const hourlyForecast = useSelector(getHourlyForcast);
  const isRowBased = useMediaQuery('(min-width: 768px)');

  // FOR HOURLY FORECAST

  const hours = hourlyForecast.time.map(el => el).slice(0, 24);
  const temp = hourlyForecast.temperature_2m.map(el => el).slice(0, 24);
  const code = hourlyForecast.weathercode.map(el => el).slice(0, 24);
  const hourlyData = hours.map((el, index) => {
    return {
      time: `${el}`.slice(11),
      temperature: `${temp[index]}`,
      code: `${code[index]}`,
    };
  });

  // FOR DAILY FORECAST
  // const dates = dailyForecast.time.map(el => el);
  // const tempMin = dailyForecast.temperature_2m_min.map(el => el);
  // const tempMax = dailyForecast.temperature_2m_max.map(el => el);

  // const dailyData = dates.map((el, index) => {
  //   return {
  //     date: `${el}`,
  //     min_temperature: `${tempMin[index]}`,
  //     max_temperature: `${tempMax[index]}`,
  //   };
  // });

  return (
    <ChartsWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={200}
          height={200}
          data={hourlyData}
          fill="rgba(233, 201, 57, 0.25)"
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Tooltip />
          {isRowBased && (
            <XAxis
              dataKey="code"
              xAxisId="1"
              stroke="transparent"
              fill="transparent"
              tick={renderCustomAxisTick}
            />
          )}
          <XAxis dataKey="time" xAxisId="0" />
          {isRowBased && <YAxis />}
          <Area
            type="monotone"
            stackId="1"
            dataKey="temperature"
            stroke="#E9C939"
            strokeWidth={3}
            fill="rgba(233, 201, 57, 0.25)"
            activeDot={{ r: 6 }}
            dot={<CustomizedDot />}
          />
          {/* <Area
            type="monotone"
            stackId="1"
            dataKey="max_temperature"
            stroke="#4be939"
            strokeWidth={3}
            fill="rgba(235, 209, 131, 0.267)"
          /> */}
        </AreaChart>
      </ResponsiveContainer>
    </ChartsWrapper>
  );
};
