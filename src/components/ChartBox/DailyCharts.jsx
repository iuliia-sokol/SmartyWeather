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
import { getDailyForcast } from 'redux/location/locSelectors';

// import { renderCustomAxisTick } from 'utils/customAxis';
import {
  CustomizeActivedDotTempMax,
  CustomizeActivedDotTempMin,
  CustomizedDot,
} from 'utils/customDot';
import { ChartsWrapper } from './DailyCharts.styled';

function format(date) {
  const month = String(date.toLocaleString('en-us', { month: 'short' }));
  const day = String(date.getDate()).padStart(2, '0');

  return `${month}, ${day}`;
}

export const DailyChartsUI = () => {
  const dailyForecast = useSelector(getDailyForcast);

  const isRowBased = useMediaQuery('(min-width: 768px)');

  //   FOR DAILY FORECAST

  const dates = dailyForecast.time.map(el => format(new Date(el)));
  const tempMin = dailyForecast.temperature_2m_min.map(el => el);
  const tempMax = dailyForecast.temperature_2m_max.map(el => el);

  const dailyData = dates.map((el, index) => {
    return {
      date: `${el}`,
      min: `${tempMin[index]}`,
      max: `${tempMax[index]}`,
    };
  });

  console.log(dailyData);
  return (
    <ChartsWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={200}
          height={200}
          data={dailyData}
          fill="rgba(233, 201, 57, 0.25)"
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Tooltip />
          {isRowBased && <YAxis />}
          {/* {isRowBased && (
            <XAxis
              dataKey="code"
              xAxisId="1"
              stroke="transparent"
              fill="transparent"
              tick={renderCustomAxisTick}
            />
          )} */}
          <XAxis dataKey="date" />

          <Area
            type="monotone"
            stackId="1"
            dataKey="min"
            stroke="#658ED9"
            strokeWidth={3}
            fill="rgba(101, 142, 217, 0.1)"
            activeDot={<CustomizeActivedDotTempMin />}
            dot={{ r: 1 }}
          />
          <Area
            type="monotone"
            stackId="1"
            dataKey="max"
            stroke="rgba(212, 66, 111, 0.5)"
            strokeWidth={3}
            fill="rgba(216, 97, 145, 0.1)"
            activeDot={<CustomizeActivedDotTempMax />}
            dot={{ r: 1 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartsWrapper>
  );
};
