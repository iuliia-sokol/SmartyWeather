// import {
//   // main component
//   Chart,
//   // graphs
//   Bars,
//   Cloud,
//   Dots,
//   Labels,
//   Lines,
//   Pies,
//   RadialLines,
//   Ticks,
//   Title,
//   // wrappers
//   Layer,
//   Animate,
//   Transform,
//   Handlers,
//   // helpers
//   DropShadow,
//   Gradient,
// } from 'rumble-charts';

import { useSelector } from 'react-redux';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  //   CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { getDailyForcast, getHourlyForcast } from 'redux/location/locSelectors';
import { ChartsWrapper } from './Charts.styled';

export const ChartsUI = () => {
  const dailyForecast = useSelector(getDailyForcast);
  const hourlyForecast = useSelector(getHourlyForcast);

  //   const dates = forecast.map(el => {
  //     return { date: `${el.date}`, temp: `${el.day.maxtemp_c}` };
  //   });

  // FOR HOURLY FORECAST
  const hours = hourlyForecast.time.map(el => el).slice(0, 24);
  const temp = hourlyForecast.temperature_2m.map(el => el).slice(0, 24);
  const hourlyData = hours.map((el, index) => {
    return {
      time: `${el}`.slice(11),
      temperature: `${temp[index]}`,
    };
  });

  // FOR DAILY FORECAST
  const dates = dailyForecast.time.map(el => el);
  const tempMin = dailyForecast.temperature_2m_min.map(el => el);
  const tempMax = dailyForecast.temperature_2m_max.map(el => el);

  const dailyData = dates.map((el, index) => {
    return {
      date: `${el}`,
      min_temperature: `${tempMin[index]}`,
      max_temperature: `${tempMax[index]}`,
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
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Tooltip />
          <XAxis dataKey="time" />
          <YAxis dataKey="temperature" />
          <Area
            type="monotone"
            stackId="1"
            dataKey="temperature"
            stroke="#E9C939"
            strokeWidth={3}
            fill="rgba(233, 201, 57, 0.25)"
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

// <Chart
//   series={[
//     {
//       data: [10, 11, 12, 13, 12, 12, 15, 16, 15, 17, 18, 20],
//     },
//   ]}
//   viewBox="0 0 300 150"
// >
//   <Handlers
//     optimized={true}
//     distance="x"
//     onMouseLeave={function noRefCheck() {}}
//     onMouseMove={function noRefCheck() {}}
//   >
//     <Layer height="68%" position="middle center" width="100%">
//       <Bars
//         combined
//         barAttributes={{
//           stroke: 'rgba(233, 201, 57, 0.25)',
//           strokeLinejoin: 'round',
//           strokeWidth: 23,
//           transform: 'translate(0 12)',
//         }}
//         barWidth="0%"
//         colors={['rgba(233, 201, 57, 0.25)']}
//         //   groupPadding="1%"
//         // innerPadding="0%"
//         // interpolation="cardinal"
//       />
//       <Lines
//         colors={['#E9C939']}
//         interpolation="cardinal"
//         lineAttributes={{
//           strokeLinecap: 'round',
//           strokeWidth: 5,
//         }}
//         lineWidth={0}
//       />
//       <Dots
//         className="dots"
//         colors={['#007696']}
//         dotStyle={{
//           fillOpacity: 0,
//           transition: 'all 250ms',
//         }}
//       />
//       <Ticks
//         axis="x"
//         labelAttributes={{
//           y: '2.5em',
//         }}
//         labelStyle={{
//           dominantBaseline: 'text-after-edge',
//           fill: '#000',
//           fontFamily: 'sans-serif',
//           fontSize: 10,
//           fontWeight: 'normal',
//           textAnchor: 'middle',
//         }}
//         ticks={[
//           {
//             label: 'JUL',
//             x: 0,
//           },
//           {
//             label: 'AUG',
//             x: 1,
//           },
//           {
//             label: 'SEP',
//             x: 2,
//           },
//           {
//             label: 'OCT',
//             x: 3,
//           },
//           {
//             label: 'NOV',
//             x: 4,
//           },
//           {
//             label: 'DEC',
//             x: 5,
//           },
//           {
//             label: 'JAN',
//             x: 6,
//           },
//           {
//             label: 'FEB',
//             x: 7,
//           },
//           {
//             label: 'MAR',
//             x: 8,
//           },
//           {
//             label: 'APR',
//             x: 9,
//           },
//           {
//             label: 'MAY',
//             x: 10,
//           },
//           {
//             label: 'JUN',
//             x: 11,
//           },
//         ]}
//       />
//     </Layer>
//   </Handlers>
// </Chart>
