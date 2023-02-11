import sprite from 'images/icons_sprite.svg';

import { useSelector } from 'react-redux';
import { getCurrentWeather } from 'redux/location/locSelectors';

export const CustomizedDot = props => {
  const { cx, cy, payload } = props;

  const weather = useSelector(getCurrentWeather);
  const currentTime = weather.current_weather.time.slice(11);

  if (payload.time === currentTime) {
    return (
      <svg x={cx - 12} y={cy - 12} width={24} height={24}>
        <use href={sprite + `#planet-earth`} />
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
