import { formatDate } from 'utils/formatDate';
import {
  ForecastWrapper,
  IconWrapper,
  Text,
  ConditionText,
  TextWrapper,
  DateText,
  TextRain,
} from './Forecast.styled';

import tempPng from '../../images/celsius-min.png';
import humidPng from '../../images/hydrometer-min.png';
import yes from '../../images/yes-min.png';
import no from '../../images/no-min.png';

export const ForecastUI = ({
  icon,
  date,
  temperature,
  humidity,

  condition,
  percipitation,
}) => {
  const formatedDate = formatDate(new Date(date));
  return (
    <ForecastWrapper>
      <DateText>{formatedDate}</DateText>
      <ConditionText>
        <IconWrapper>
          <img src={icon} alt={condition} />
        </IconWrapper>
        <span>{condition}</span>
      </ConditionText>
      <TextWrapper>
        <Text>
          <img src={tempPng} alt="Temperature" />
          <span>Temperature:</span> {temperature} °C
        </Text>
        <Text>
          <img src={humidPng} alt="Humidity" />
          <span>Humidity:</span> {humidity} %
        </Text>
        <TextRain>
          <span>Rain:</span>
          {percipitation ? (
            <img src={yes} alt="yes" />
          ) : (
            <img src={no} alt="no" />
          )}
        </TextRain>
      </TextWrapper>
    </ForecastWrapper>
  );
};
