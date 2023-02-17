import { useMediaQuery } from 'hooks/useMedia';
import { useSelector } from 'react-redux';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { getHourlyForcast } from 'redux/location/locSelectors';
import { renderCustomAxisTick } from 'utils/customAxis';
import { CustomizeActivedDot, CustomizedDot } from 'utils/customDot';
import { ChartsWrapper } from './HourlyCharts.styled';

export const HourlyChartsUI = () => {
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
            right: 16,
            left: 16,
            bottom: 5,
          }}
        >
          <ReferenceLine
            y={0}
            strokeDasharray="5 5"
            stroke="rgba(51, 40, 33, 0.7)"
          />
          <Tooltip />
          {isRowBased && (
            <>
              <YAxis interval="preserveStartEnd" />
              <XAxis
                dataKey="code"
                xAxisId="1"
                stroke="transparent"
                fill="transparent"
                tick={renderCustomAxisTick}
              />
            </>
          )}
          <XAxis dataKey="time" xAxisId="0" />

          <Area
            type="monotone"
            stackId="1"
            dataKey="temperature"
            stroke="#E9C939"
            strokeWidth={3}
            fill="rgba(233, 201, 57, 0.25)"
            activeDot={<CustomizeActivedDot />}
            dot={<CustomizedDot />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartsWrapper>
  );
};
