import { IndicatorUI } from 'components/Indicator/Indicator';

import styled from 'styled-components';

export const SunBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MoonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  column-gap: 32px;
  row-gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AstroIndicator = styled(IndicatorUI)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const MoonImg = styled.img`
  width: 60%;
  height: auto;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: calc(50% - 32px);
    height: auto;
  }
`;

export const MoonIndicatorsWrapper = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 16px;
  width: max-content;
  width: 100%;

  & li {
    box-sizing: border-box;
    width: 80%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: calc(50% - 16px);

    & li {
      width: 100%;
    }
  }
`;

export const SunIndicatorsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 16px;
  column-gap: 32px;
  width: 100%;

  & li {
    box-sizing: border-box;
    width: 80%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    & li {
      width: calc(50% - 16px);
    }
  }
`;
