import styled from 'styled-components';

export const DataWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 32px;
  margin: 0 auto;
  border-radius: 30px;
  padding: 32px;
  background: rgba(255, 255, 255, 0.63);
  /* box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45),
    inset 5px 5px 9px rgba(94, 104, 121, 0.3); */
  box-shadow: -5px -5px 80px #fff, 5px 5px 20px #babecc;
  backdrop-filter: blur(2.3px);
  -webkit-backdrop-filter: blur(2.3px);
  border: 1px solid rgba(255, 255, 255, 0.77);
`;

export const WeatherDataWrapper = styled.div`
  display: flex;
  /* flex-direction: row-reverse; */
  justify-content: space-between;

  /* align-items: flex-end; */
  gap: 16px;
`;

export const WeatherInfoWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 16px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.28);
  border-radius: 16px;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  /* box-shadow: -2px -2px 5px white, 3px 3px 5px rgba(0, 0, 0, 0.1); */
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 220px;
  }
`;

export const CityName = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p => p.theme.colors.mainDark};

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const WeatherConditions = styled.div`
  padding: 10px;
  color: ${p => p.theme.colors.mainLight};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};
  background-color: ${p => p.theme.colors.mainAccentPink};
  border-radius: ${p => p.theme.radii.main};
`;

export const IndicatorsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Indicator = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.main};
  padding: 10px;

  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p =>
    p.color === 'blue'
      ? p.theme.colors.accentBlue
      : p.color === 'pink'
      ? p.theme.colors.accentPink
      : p.theme.colors.accentViolet};
  background-color: ${p =>
    p.color === 'blue'
      ? p.theme.colors.bgBlue
      : p.color === 'pink'
      ? p.theme.colors.bgPink
      : p.theme.colors.bgViolet};
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const FeelsLike = styled.span`
  font-size: 20px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p => p.theme.colors.textGrey};
`;
export const Temperature = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: ${p => p.theme.fonts.main};

  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 96px;
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p => p.theme.colors.mainDark};

  & img {
    width: 40px;
  }

  & span {
    font-weight: ${p => p.theme.fontWeights[0]};
    font-size: 24px;
  }
`;
