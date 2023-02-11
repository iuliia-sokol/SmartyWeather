import styled from 'styled-components';

export const CurrentState = styled.div`
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
