import { useMediaQuery } from 'hooks/useMedia';
import { useSelector } from 'react-redux';
import {
  ReferenceLine,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
} from 'recharts';
import { getAirData } from 'redux/location/locSelectors';
import { CustomizedDotEuAQI, CustomizedDotUsAQI } from 'utils/customDot';
import { ChartsWrapper } from './HourlyChartsAir.styled';

export const HourlyChartsAirUI = () => {
  const airData = useSelector(getAirData);
  const isRowBased = useMediaQuery('(min-width: 768px)');

  const hours = airData.hourly.time.map(el => el).slice(0, 24);
  const dust = airData.hourly.dust.map(el => el).slice(0, 24);
  const alder_pollen = airData.hourly.alder_pollen.map(el => el).slice(0, 24);
  const birch_pollen = airData.hourly.birch_pollen.map(el => el).slice(0, 24);
  const grass_pollen = airData.hourly.grass_pollen.map(el => el).slice(0, 24);
  const mugwort_pollen = airData.hourly.mugwort_pollen
    .map(el => el)
    .slice(0, 24);
  const olive_pollen = airData.hourly.olive_pollen.map(el => el).slice(0, 24);
  const ragweed_pollen = airData.hourly.ragweed_pollen
    .map(el => el)
    .slice(0, 24);
  const euAQI = airData.hourly.european_aqi.map(el => el).slice(0, 24);
  const usAQI = airData.hourly.us_aqi.map(el => el).slice(0, 24);

  const hourlyData = hours.map((el, index) => {
    return {
      time: `${el}`.slice(11),
      dust: `${dust[index]}`,
      alder_pollen: `${alder_pollen[index]}`,
      birch_pollen: `${birch_pollen[index]}`,
      grass_pollen: `${grass_pollen[index]}`,
      mugwort_pollen: `${mugwort_pollen[index]}`,
      olive_pollen: `${olive_pollen[index]}`,
      ragweed_pollen: `${ragweed_pollen[index]}`,
      euAQI: `${euAQI[index]}`,
      usAQI: `${usAQI[index]}`,
    };
  });

  console.log(hourlyData);

  return (
    <ChartsWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={hourlyData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip />
          <Legend />
          {isRowBased && (
            <>
              <YAxis interval="preserveStartEnd" />
            </>
          )}
          <XAxis dataKey="time" xAxisId="0" />
          <ReferenceLine y={0} stroke="#000" />
          <Line
            dataKey="dust"
            stroke="rgba(21, 144, 165, 0.454)"
            // activeDot={<CustomizeActivedDot />}
            // dot={<CustomizedDot />}
          />
          <Line
            dataKey="usAQI"
            stroke="rgba(91, 138, 219, 0.763)"
            // activeDot={<CustomizeActivedDot />}
            dot={<CustomizedDotUsAQI />}
          />
          <Line
            dataKey="euAQI"
            stackId="a"
            stroke="rgba(103, 225, 66, 0.664)"
            // activeDot={<CustomizeActivedDot />}
            dot={<CustomizedDotEuAQI />}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartsWrapper>
  );
};
