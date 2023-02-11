import sprite from 'images/icons_sprite.svg';

export const renderCustomAxisTick = ({ x, y, payload }) => {
  let path = '';

  switch (payload.value) {
    case '0':
      path = 'day';
      break;
    case '1':
      path = 'cloudy-day-1';
      break;
    case '2':
      path = 'cloudy-day-2';
      break;
    case '3':
    case '45':
    case '48':
      path = 'cloudy';
      break;
    case '51':
    case '53':
    case '55':
    case '56':
    case '57':
      path = 'rainy-5';
      break;
    case '61':
    case '63':
    case '65':
    case '66':
    case '67':
    case '80':
    case '81':
    case '82':
      path = 'rainy-7';
      break;
    case '85':
    case '86':
    case '77':
    case '71':
    case '73':
    case '75':
      path = 'snowy';
      break;
    case '95':
    case '96':
    case '99':
      path = 'thunder';
      break;
    default:
      path = 'weather';
  }

  return (
    <svg x={x - 30} y={y - 20} width={42} height={42} viewBox="0 0 46 46">
      <use href={sprite + `#${path}`} />
    </svg>
  );
};
