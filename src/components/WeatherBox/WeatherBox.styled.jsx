import styled from 'styled-components';

export const WeatherWrapper = styled.div`
  padding: 32px;
  background: rgba(255, 255, 255, 0.23);
  border-radius: 30px;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0px 5px 10px 0px rgba(0, 255, 255, 0.7); */
  box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45),
    inset 5px 5px 9px rgba(94, 104, 121, 0.3);
  backdrop-filter: blur(5.3px);
  -webkit-backdrop-filter: blur(5.3px);
  border: 1px solid rgba(255, 255, 255, 0.77);

  /* &:hover {
    box-shadow: 0px 10px 20px 2px rgba(0, 255, 255, 0.7);
  } */
`;
