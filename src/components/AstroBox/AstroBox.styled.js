import { IndicatorUI } from 'components/Indicator/Indicator';

import styled from 'styled-components';

export const AstroWrapper = styled.div`
  padding: 32px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.23);
  border-radius: 30px;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0px 5px 10px 0px rgba(0, 255, 255, 0.7); */
  box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45),
    inset 5px 5px 9px rgba(94, 104, 121, 0.3);
  backdrop-filter: blur(5.3px);
  -webkit-backdrop-filter: blur(5.3px);
  border: 1px solid rgba(255, 255, 255, 0.77);
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const SunBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export const AstroIndicator = styled(IndicatorUI)`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: calc(100% - 32px);
    /* flex-direction: row; */
  }
`;

export const MoonImg = styled.img`
  width: 60%;
  height: auto;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: calc(50% - 16px);
    height: auto;
  }
`;

export const MoonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MoonIndicatorsWrapper = styled.ul`
  width: 100%;
  /* width: calc(50% - 32px); */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 16px;
  column-gap: 32px;

  & li {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;

    & li {
      width: calc(100% - 16px);
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

  & li {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    & li {
      width: calc(50% - 32px);
    }
  }
`;
