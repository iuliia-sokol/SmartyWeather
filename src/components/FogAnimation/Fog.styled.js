import styled from 'styled-components';
import { keyframes } from 'styled-components';

import fog1 from '../../images/fog1.png';
import fog2 from '../../images/fog2.png';

const drift = keyframes`
  from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-200vw, 0, 0);
    }`;

export const FogWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  pointer-events: none;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 300%;
    background-size: contain;
    background-position: center;
    background-repeat: repeat-x;
  }
  &:before {
    background-image: url(${fog1});
    animation: ${drift} 60s linear 0s infinite;
  }
  &:after {
    background-image: url(${fog2});
    animation: ${drift} 25s linear 0s infinite;
  }
`;
