import styled from 'styled-components';
import { keyframes } from 'styled-components';

const hourglassRotate = keyframes`
    0%    { transform: rotateX(0deg); }
    50%   { transform: rotateX(180deg); }
    100%  { transform: rotateX(180deg); }
`;

const hideCurves = keyframes`
    0%    { opacity: 1; }
    25%   { opacity: 0; }
    30%   { opacity: 0; }
    40%   { opacity: 1; }
    100%  { opacity: 1; }
`;

const sandStream1 = keyframes`
    0%      { height: 0;    top: 35px; }
    50%     { height: 0;    top: 45px; }
    60%     { height: 35px; top: 8px; }
    85%     { height: 35px; top: 8px; }
    100%    { height: 0;    top: 8px; }
`;

const sandStream1mob = keyframes`
    0%      { height: 0;    top: 17.5px; }
    50%     { height: 0;    top: 22.5px; }
    60%     { height:17.5px; top: 4px; }
    85%     { height:17.5px; top: 4px; }
    100%    { height: 0;    top: 4px; }
`;

const sandStream2 = keyframes`
 0%      { opacity: 0; }
    50%     { opacity: 0; }
    51%     { opacity: 1; }
    90%     { opacity: 1; }
    91%     { opacity: 0; }
    100%    { opacity: 0; }
`;

const sandFillup = keyframes`
    0%      { opacity: 0; height: 0; }
    60%     { opacity: 1; height: 0; }
    100%    { opacity: 1; height: 17px; }
`;

const sandDeplete = keyframes`
    0%      { opacity: 0; top: 45px; height: 17px; width: 38px; left: 6px; } // prevents flickering
    1%      { opacity: 1; top: 45px; height: 17px; width: 38px; left: 6px; }
    24%     { opacity: 1; top: 45px; height: 17px; width: 38px; left: 6px; }
    25%     { opacity: 1; top: 41px; height: 17px; width: 38px; left: 6px; }
    50%     { opacity: 1; top: 41px; height: 17px; width: 38px; left: 6px; }
    90%     { opacity: 1; top: 41px; height: 0;    width: 10px; left: 20px; }
`;

const sandDepletemob = keyframes` 
    0%      { opacity: 0; top: 22.5px; height: 8.5px; width: 19px; left: 3px; } // prevents flickering
    1%      { opacity: 1; top: 22.5px; height: 8.5px; width: 19px; left: 3px; }
    24%     { opacity: 1; top: 22.5px; height: 8.5px; width: 19px; left: 3px; }
    25%     { opacity: 1; top: 20.5px; height: 8.5px; width: 19px; left: 3px; }
    50%     { opacity: 1; top: 20.5px; height: 8.5px; width: 19px; left: 3px; }
    90%     { opacity: 1; top: 20.5px; height: 0;    width: 5px; left: 10px; }
`;

// $glassColor: lighten(#333,20);

export const HourglassBackground = styled.div`
  position: relative;
  /* background-color: ${p => p.theme.colors.mainDark}; */
  background-color: rgba(0, 0, 0, 0.48);
  height: 65px;
  width: 65px;
  border-radius: 50%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  z-index: 1;
  /* @media screen and (min-width: 1280px) {
    height: 130px;
    width: 130px;
  } */
`;

export const HourglassContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
  width: 25px;
  height: 35px;
  animation: ${hourglassRotate} 3s ease-in 0s infinite;
  transform-style: preserve-3d;
  perspective: 1000px;

  /* @media screen and (min-width: 1280px) {
    top: 30px;
    left: 40px;
    width: 50px;
    height: 70px;
  } */

  div,
  div:before,
  div:after {
    transform-style: preserve-3d;
  }
`;

export const HourglassCapTop = styled.div`
  position: absolute;
  left: 0;
  height: 2.5px;
  width: 25px;
  background-color: ${p => p.theme.colors.mainLight};

  /* @media screen and (min-width: 1280px) {
    height: 5px;
    width: 50px;
  } */

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    transform: rotateX(90deg);
    background-color: ${p => p.theme.colors.mainLight};

    /* @media screen and (min-width: 1280px) {
      width: 50px;
      height: 50px;
    } */
  }
  top: 0;

  &:before {
    top: -12.5px;

    /* @media screen and (min-width: 1280px) {
      top: -25px;
    } */
  }
  &:after {
    top: -10px;

    /* @media screen and (min-width: 1280px) {
      top: -20px;
    } */
  }
`;

export const HourglassCapBottom = styled.div`
  position: absolute;
  left: 0;
  height: 2.5px;
  width: 25px;
  background-color: ${p => p.theme.colors.mainLight};

  /* @media screen and (min-width: 1280px) {
    height: 5px;
    width: 50px;
  } */

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    transform: rotateX(90deg);
    background-color: ${p => p.theme.colors.mainLight};

    /* @media screen and (min-width: 1280px) {
      width: 50px;
      height: 50px;
    } */
  }
  bottom: 0;

  &:before {
    bottom: -12.5px;

    /* @media screen and (min-width: 1280px) {
      bottom: -25px;
    } */
  }
  &:after {
    bottom: -10px;

    /* @media screen and (min-width: 1280px) {
      bottom: -20px;
    } */
  }
`;
export const HourglassGlassTop = styled.div`
  transform: rotateX(90deg);
  position: absolute;
  top: -8px;
  left: 1.5px;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  background-color: rgba(51, 40, 33, 0.7);

  /* @media screen and (min-width: 1280px) {
    top: -16px;
    left: 3px;
    width: 44px;
    height: 44px;
  } */
`;

export const HourglassGlass = styled.div`
  perspective: 100px;
  position: absolute;
  top: 16px;
  left: 10px;
  width: 5px;
  height: 3px;
  background-color: ${p => p.theme.colors.iconTransparent};

  /* @media screen and (min-width: 1280px) {
    top: 32px;
    left: 20px;
    width: 10px;
    height: 6px;
  } */

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    background-color: ${p => p.theme.colors.iconTransparent};
    left: -8.5px;
    width: 22px;
    height: 14px;

    /* @media screen and (min-width: 1280px) {
      left: -17px;
      width: 44px;
      height: 28px;
    } */
  }
  &:before {
    top: -13.5px;
    border-radius: 0 0 25px 25px;

    /* @media screen and (min-width: 1280px) {
      top: -27px;
    } */
  }
  &:after {
    bottom: -13.5px;
    border-radius: 25px 25px 0 0;

    /* @media screen and (min-width: 1280px) {
      bottom: -27px;
    } */
  }
`;

export const HourglassCurves = styled.div`
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 16px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: ${p => p.theme.colors.mainDark};
    animation: ${hideCurves} 3s ease-in 0s infinite;

    /* @media screen and (min-width: 1280px) {
      top: 32px;
      width: 6px;
      height: 6px;
    } */
  }
  &:before {
    left: 7.5px;

    /* @media screen and (min-width: 1280px) {
      left: 15px;
    } */
  }
  &:after {
    left: 14.5px;

    /* @media screen and (min-width: 1280px) {
      left: 29px;
    } */
  }
`;

export const HourglassSandStream = styled.div`
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 12px;
    width: 1.5px;
    background-color: ${p => p.theme.colors.bgYellow};
    animation: ${sandStream1mob} 3s ease-in 0s infinite;

    /* @media screen and (min-width: 1280px) {
      left: 24px;
      width: 3px;
      animation: ${sandStream1} 3s ease-in 0s infinite;
    } */
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 18px;
    left: 9.5px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid ${p => p.theme.colors.bgYellow};
    animation: ${sandStream2} 3s ease-in 0s infinite;

    /* @media screen and (min-width: 1280px) {
      top: 36px;
      left: 19px;
    } */
  }
`;

export const HourglassSand = styled.div`
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 3px;
    background-color: ${p => p.theme.colors.accentYellow};
    perspective: 500px;

    /* @media screen and (min-width: 1280px) {
      left: 6px;
    } */
  }

  &:before {
    top: 4px;
    width: 19.5px;
    border-radius: 3px 3px 30px 30px;
    animation: ${sandFillup} 3s ease-in 0s infinite;

    /* @media screen and (min-width: 1280px) {
      top: 8px;
      width: 39px;
    } */
  }
  &:after {
    border-radius: 30px 30px 3px 3px;
    animation: ${sandDepletemob} 3s ease-in 0s infinite;

    /* @media screen and (min-width: 1280px) {
      animation: ${sandDeplete} 3s ease-in 0s infinite;
    } */
  }
`;

export const Elipse = styled.svg`
  width: 100%;
  height: 100%;
`;
