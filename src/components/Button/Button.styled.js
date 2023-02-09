import styled from 'styled-components';

export const ButtonMain = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: calc(50%-32px);
  height: 50px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p =>
    p.color === 'blue' ? p.theme.colors.accentBlue : p.theme.colors.textGrey};
  text-align: center;
  text-transform: uppercase;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: calc(30%);
    height: 70px;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    display: inline-block;
    width: calc(100%);
    height: 40px;
    border: 4px solid
      ${p =>
        p.color === 'blue'
          ? p.theme.colors.accentBlue
          : p.color === 'pink'
          ? p.theme.colors.accentPink
          : p.color === 'violet'
          ? p.theme.colors.accentViolet
          : p.theme.colors.iconsFill};
    border-radius: 50px;
    z-index: -10;

    @media screen and (min-width: 768px) {
      width: calc(100%);
      height: 50px;
    }
  }

  &:before {
    bottom: 0;
    left: 0;
    background-color: ${p =>
      p.selected ? p.theme.colors.bgYellow : 'transparent'};
    transition: transform 0.3s, background-color 0.3s;
  }

  &:after {
    top: 10px;
    left: 0px;
    opacity: 0.3;
    transition: transform 0.3s, opacity 0.3s;

    @media screen and (min-width: 768px) {
      left: 10px;
      top: 0px;
    }
  }

  // Hover

  &:hover {
    span {
      color: ${p => p.theme.colors.mainLight};
      transform: translate(0px, -5px);

      @media screen and (min-width: 768px) {
        transform: translate(5px, -5px);
      }
    }
    &:before {
      background-color: ${p =>
        p.color === 'blue'
          ? p.theme.colors.accentBlue
          : p.theme.colors.textGrey};
      transform: translate(0px, -5px);

      @media screen and (min-width: 768px) {
        transform: translate(5px, -5px);
      }
    }
    &:after {
      transform: translate(0px, 5px);
      opacity: 0;

      @media screen and (min-width: 768px) {
        transform: translate(5px, -5px);
      }
    }
  }

  // Active
  &:active {
    &:before {
      background-color: ${p => p.theme.colors.bgYellow};
    }
  }
`;

export const ButtonText = styled.span`
  display: inline-flex;
  position: relative;
  top: 5%;
  left: 2%;
  z-index: 1000;
  transition: transform 0.3s, color 0.2s;

  @media screen and (min-width: 768px) {
    top: 10%;
    left: 0px;
  }
`;
