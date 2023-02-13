import styled from 'styled-components';

export const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
  }

  & p {
    color: black;
    font-size: 20px;
  }
`;
