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

export const ForecastUI = ({
  icon,
  date,
  temperature,
  humidity,
  wind,
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
          <span>Temperature: {temperature} °C</span>
        </Text>
        <Text>
          <span>Humidity: {humidity} %</span>
        </Text>
        <Text>
          <span>Windspeed: {wind} km/h</span>
        </Text>
        <TextRain>
          Will it rain?
          {percipitation ? 'yes' : 'no'}
        </TextRain>
      </TextWrapper>
    </ForecastWrapper>
  );
};
