import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  position: relative;
  width: 144px;
  height: fit-content;

  &::before {
    content: '';
    width: 65px;
    height: 65px;
    position: absolute;
    background-color: ${p =>
      p.position === 'header' ? 'rgba(0, 0, 0, 0.48)' : ''};
    border-radius: 50%;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    z-index: 0;
  }
`;

export const Elipse = styled.svg`
  width: 65px;
  height: 65px;
  z-index: 2;
`;
export const LogoText = styled.div`
  position: absolute;
  left: 9%;
  top: 9%;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};

  & p {
    font-size: 30px;
    letter-spacing: ${p => p.theme.letterSpacings.logo};
    color: ${p => p.theme.colors.logoTransparent};
    z-index: 2;
  }

  & span {
    position: absolute;
    left: 7%;
    transform: translateY(-10px);
    font-size: 20px;
    letter-spacing: ${p => p.theme.letterSpacings.logo};
    color: ${p => p.theme.colors.mainBgLight};
    z-index: 1;
  }
`;
