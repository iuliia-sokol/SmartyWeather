import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    top: 20%;
  }
`;

const breatheAnimation = keyframes`
 0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform:   translate(70%, 50%) rotate(90deg);   
  }
  50% {
    transform:  translate(0, 50%) rotate(180deg);    
  }
   75% {
    transform: translate(-70%, 50%) rotate(270deg);
  }
  100% {
    transform:   translate(0, 0) rotate(360deg);
  }
`;

export const PicWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  & img {
    width: 25vw;
    animation: ${breatheAnimation} 2.5s linear infinite;

    @media screen and (min-width: 1280px) {
      width: 10vw;
    }
  }
`;
