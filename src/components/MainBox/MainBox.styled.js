import styled from 'styled-components';

export const DataWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  border-radius: 30px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.63);
  /* box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45),
    inset 5px 5px 9px rgba(94, 104, 121, 0.3); */
  box-shadow: -5px -5px 80px #fff, 5px 5px 20px #babecc;
  backdrop-filter: blur(2.3px);
  -webkit-backdrop-filter: blur(2.3px);
  /* border: 1px solid rgba(255, 255, 255, 0.77); */

  @media screen and (min-width: 1280px) {
    width: 70%;
    padding: 32px 56px;
  }
`;

export const WeatherDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  position: relative;
`;

export const WeatherInfoWrapper = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 24px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.28);
  border-radius: 16px;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  /* box-shadow: -2px -2px 5px white, 3px 3px 5px rgba(0, 0, 0, 0.1); */
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  top: -20%;
  left: -20%;
  position: absolute;

  & img {
    width: 100%;
    /* width: 220px; */
  }

  @media screen and (min-width: 768px) {
    position: static;
  }

  @media screen and (min-width: 1280px) {
    width: 40%;
    /* position: relative; */
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
  margin-bottom: 20px;
  color: ${p => p.theme.colors.mainLight};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};
  background-color: ${p => p.theme.colors.mainAccentPink};
  border-radius: ${p => p.theme.radii.main};
`;

export const IndicatorsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 16px;

  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
  }
`;

export const Indicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 35%;
  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: ${p => p.theme.radii.main};
  padding: 8px;
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

  & img {
    width: 20px;
    height: 20px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 20%;

    & img {
      width: 30px;
      height: 30px;
    }

    @media screen and (min-width: 1280px) {
      width: fit-content;
    }
  }
`;

export const IndicatorText = styled.span`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline-block;
    margin-right: 8px;
  }
`;

export const ChanceOfIndicator = styled(Indicator)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.bgGrey};
  color: #8495b2;
  gap: 8px;

  & div {
    display: flex;
  }

  & img {
    margin-right: 8px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 1;
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
