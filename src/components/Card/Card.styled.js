import styled from 'styled-components';

export const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: ${p =>
    p.image
      ? p.image
      : 'linear-gradient(47.75deg, #082276 7.07%, #030f34 97.3%), #082276;'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;

  /* & img {
    width: 100%;
    height: 100%;
  }

  & p {
    color: black;
    font-size: 20px;
  } */
`;
