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
`;

export const View = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  z-index: -2;
  /* background: linear-gradient(
    45deg,
    rgba(245, 70, 66, 0.45),
    rgba(8, 83, 156, 0.45)
  ); */

  background: ${p =>
    p.dayTime
      ? 'linear-gradient(45deg, rgba(245, 70, 66, 0.45), rgba(8, 83, 156, 0.45))'
      : 'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))'};

  /* background: linear-gradient(
    to bottom,
    rgba(0, 47, 75, 0.5) 0%,
    rgba(220, 66, 37, 0.5) 100%
  ); */
  /* background: linear-gradient(
    to bottom,
    rgba(245, 246, 252, 0.52),
    rgba(117, 19, 93, 0.73)
  ); */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002f4b', endColorstr='#00000000',GradientType=0 );
  opacity: 0.8;
`;
