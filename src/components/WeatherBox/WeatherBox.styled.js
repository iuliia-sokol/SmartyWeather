import styled from 'styled-components';

export const ForecastWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const IndicatorsWrapper = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 16px;

  & li {
    display: flex;
    width: 80%;

    & span {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;

    & li {
      width: 25%;
    }
  }
`;
