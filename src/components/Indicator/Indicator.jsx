import { Indicator, IndicatorText, IndicatorImg } from './Indicator.styled';

export const IndicatorUI = ({ src, text, source, color = 'grey' }) => {
  return (
    <Indicator color={color}>
      <IndicatorImg src={src} alt={text} loading="lazy" />
      <IndicatorText>{text}</IndicatorText>
      <span>{source}</span>
    </Indicator>
  );
};
