import { useMediaQuery } from 'hooks/useMedia';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { getDailyForcast } from 'redux/location/locSelectors';
import { renderCustomAxisTick } from 'utils/customAxis';

import {
  CustomizeActivedDotPrecipitation,
  CustomizeActivedDotTempMax,
  CustomizeActivedDotTempMin,
} from 'utils/customDot';
import { ChartsWrapper } from './DailyCharts.styled';

function formatDate(date) {
  const month = String(date.toLocaleString('en-us', { month: 'short' }));
  const day = String(date.getDate()).padStart(2, '0');

  return `${month}, ${day}`;
}

export const DailyChartsUI = () => {
  const dailyForecast = useSelector(getDailyForcast);

  const isRowBased = useMediaQuery('(min-width: 768px)');

  //   FOR DAILY FORECAST

  const dates = dailyForecast.time.map(el => formatDate(new Date(el)));
  const tempMin = dailyForecast.temperature_2m_min.map(el => el);
  const tempMax = dailyForecast.temperature_2m_max.map(el => el);
  const code = dailyForecast.weathercode.map(el => el);
  const precipitation = dailyForecast.precipitation_sum.map(el => el);

  const dailyData = dates.map((el, index) => {
    return {
      date: `${el}`,
      dateShort: `${el}`.slice(5),
      min: `${tempMin[index]}`,
      max: `${tempMax[index]}`,
      code: `${code[index]}`,
      precipitation: `${precipitation[index]}`,
    };
  });

  return (
    <ChartsWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={200}
          height={200}
          data={dailyData}
          margin={{
            top: 0,
            right: 16,
            left: 16,
            bottom: 16,
          }}
        >
          <Tooltip />

          {isRowBased ? (
            <>
              <YAxis />
              <XAxis
                dataKey="code"
                xAxisId="1"
                stroke="transparent"
                fill="transparent"
                tick={renderCustomAxisTick}
              />
              <XAxis dataKey="date" />
            </>
          ) : (
            <XAxis dataKey="dateShort" />
          )}

          <XAxis dataKey="date" />
          <Line
            type="monotone"
            stackId="1"
            dataKey="min"
            stroke="#658ED9"
            strokeWidth={3}
            activeDot={<CustomizeActivedDotTempMin />}
            dot={{ r: 2 }}
          />
          <Line
            type="monotone"
            stackId="1"
            dataKey="max"
            stroke="rgba(212, 66, 111, 0.5)"
            strokeWidth={3}
            activeDot={<CustomizeActivedDotTempMax />}
            dot={{ r: 2 }}
          />
          <Line
            stackId="1"
            dataKey="precipitation"
            stroke="rgba(51, 40, 33, 0.4)"
            strokeWidth={3}
            strokeDasharray="3 3"
            activeDot={<CustomizeActivedDotPrecipitation />}
            dot={{ r: 2 }}
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </ChartsWrapper>
  );
};
