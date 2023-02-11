import styled from 'styled-components';

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
