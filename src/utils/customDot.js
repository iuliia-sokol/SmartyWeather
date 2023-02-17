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

  return <></>;
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

export const CustomizedDotEuAQI = props => {
  const { cx, cy, value } = props;

  if (value <= 100 && value >= 80) {
    return (
      <svg
        x={cx - 8}
        y={cy - 8}
        width={16}
        height={16}
        fill="red"
        stroke="black"
      >
        <use href={sprite + `#balloon`} />
      </svg>
    );
  }
  if (value <= 79 && value >= 60) {
    return (
      <svg
        x={cx - 8}
        y={cy - 8}
        width={16}
        height={16}
        fill="orange"
        stroke="black"
      >
        <use href={sprite + `#balloon`} />
      </svg>
    );
  }
  if (value <= 59 && value >= 40) {
    return (
      <svg
        x={cx - 8}
        y={cy - 8}
        width={16}
        height={16}
        fill="#ffb44a"
        stroke="black"
      >
        <use href={sprite + `#balloon`} />
      </svg>
    );
  }
  if (value <= 39 && value >= 20) {
    return (
      <svg
        x={cx - 8}
        y={cy - 8}
        width={16}
        height={16}
        fill="#a3d661"
        stroke="black"
      >
        <use href={sprite + `#balloon`} />
      </svg>
    );
  }
  return (
    <svg
      x={cx - 8}
      y={cy - 8}
      width={16}
      height={16}
      fill="#4ad295"
      stroke="black"
    >
      <use href={sprite + `#balloon`} />
    </svg>
  );
};

export const CustomizedDotUsAQI = props => {
  const { cx, cy, value } = props;

  if (value <= 500 && value >= 301) {
    return (
      <svg
        x={cx - 8}
        y={cy - 8}
        width={16}
        height={16}
        fill="red"
        stroke="black"
      >
        <use href={sprite + `#balloon`} />
      </svg>
    );
  }
  if (value <= 300 && value >= 201) {
    return (
      <svg
        x={cx - 8}
        y={cy - 8}
        width={16}
        height={16}
        fill="orange"
        stroke="black"
      >
        <use href={sprite + `#balloon`} />
      </svg>
    );
  }
  if (value <= 200 && value >= 151) {
    return (
      <svg
        x={cx - 8}
        y={cy - 8}
        width={16}
        height={16}
        fill="#ffb44a"
        stroke="black"
      >
        <use href={sprite + `#balloon`} />
      </svg>
    );
  }
  if (value <= 150 && value >= 101) {
    return (
      <svg
        x={cx - 8}
        y={cy - 8}
        width={16}
        height={16}
        fill="#bcba1c"
        stroke="black"
      >
        <use href={sprite + `#balloon`} />
      </svg>
    );
  }
  if (value <= 100 && value >= 51) {
    return (
      <svg
        x={cx - 8}
        y={cy - 8}
        width={16}
        height={16}
        fill="#a3d661"
        stroke="black"
      >
        <use href={sprite + `#balloon`} />
      </svg>
    );
  }
  return (
    <svg
      x={cx - 8}
      y={cy - 8}
      width={16}
      height={16}
      fill="#4ad295"
      stroke="black"
    >
      <use href={sprite + `#balloon`} />
    </svg>
  );
};
