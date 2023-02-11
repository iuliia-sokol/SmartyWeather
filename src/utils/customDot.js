import sprite from 'images/icons_sprite.svg';

import { useSelector } from 'react-redux';
import { getCurrentWeather } from 'redux/location/locSelectors';

export const CustomizedDot = props => {
  const { cx, cy, payload } = props;

  const weather = useSelector(getCurrentWeather);
  const currentTime = weather.current_weather.time.slice(11);

  if (payload.time === currentTime) {
    return (
      <svg x={cx - 14} y={cy - 14} width={28} height={28}>
        <use href={sprite + `#sun`} />
      </svg>
    );
  }

  return (
    <>
      {/* <svg x={cx - 10} y={cy - 10} width={20} height={20}>
        <use href={sprite + `#planet-earth`} />
      </svg> */}
    </>
  );
};

export const CustomizeActivedDot = props => {
  const { cx, cy } = props;

  return (
    <>
      <svg x={cx - 10} y={cy - 10} width={20} height={20}>
        <use href={sprite + `#planet-earth`} />
      </svg>
    </>
  );
};

export const CustomizeActivedDotTempMin = props => {
  const { cx, cy } = props;
  return (
    <>
      <svg x={cx - 10} y={cy - 10} width={20} height={20}>
        <use href={sprite + `#temp-min`} />
      </svg>
    </>
  );
};

export const CustomizeActivedDotTempMax = props => {
  const { cx, cy } = props;
  return (
    <>
      <svg x={cx - 10} y={cy - 10} width={20} height={20}>
        <use href={sprite + `#temp-max`} />
      </svg>
    </>
  );
};

export const CustomizeActivedDotPrecipitation = props => {
  const { cx, cy } = props;
  return (
    <>
      <svg x={cx - 10} y={cy - 10} width={20} height={20}>
        <use href={sprite + `#umbrella`} />
      </svg>
    </>
  );
};
