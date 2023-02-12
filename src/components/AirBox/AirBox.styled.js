import styled from 'styled-components';

export const CurrentState = styled.div`
  padding: 10px 24px;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.mainLight};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};
  background-color: ${p =>
    p.index === 'Good'
      ? '#31a37d'
      : p.index === 'Moderate'
      ? '#709f2e'
      : p.index === 'Unhealthy for sensitive group'
      ? '#bcba1c'
      : p.index === 'Unhealthy'
      ? '#ca7616'
      : p.index === 'Very unhealthy'
      ? '#ca5b16'
      : p.index === 'Hazardous'
      ? '#ca3116'
      : '#5E4FC1'};
  border-radius: ${p => p.theme.radii.main};

  & span {
    font-weight: ${p => p.theme.fontWeights[1]};
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const IndicatorsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  & li {
    font-size: 16px;
    justify-content: center;
    width: 80%;
    height: fit-content;

    & img {
      width: 40px;
      height: auto;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    & li {
      width: 25%;
    }
  }
`;
