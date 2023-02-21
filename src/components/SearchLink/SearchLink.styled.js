import styled, { keyframes } from 'styled-components';

import earthMap from '../../images/earth.jpg';

const movimiento = keyframes`
0% { background-position:0 0 }
  100% { background-position:355px 0 }
`;

export const EarthContainer = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.48);
  height: 65px;
  width: 65px;
  border-radius: 50%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
`;

export const Elipse = styled.svg`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const EarthAnimationBox = styled.div`
  background: url(${earthMap});
  background-size: cover;
  border-radius: 50%;
  width: 65px;
  height: 65px;
  z-index: 10;
  animation: ${movimiento} 10s linear 0s infinite;
  transform: rotateX(6deg) rotateY(6deg) rotateZ(6deg);
`;
