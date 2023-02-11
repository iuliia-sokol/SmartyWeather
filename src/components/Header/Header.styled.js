import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 16px 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  position: relative;
  width: 144px;
  height: fit-content;
`;

export const Elipse = styled.svg`
  width: 60px;
  height: 60px;
`;
export const Logo = styled.div`
  position: absolute;
  left: 7%;
  top: 10%;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};

  & p {
    font-size: 30px;
    letter-spacing: ${p => p.theme.letterSpacings.logo};
    color: ${p => p.theme.colors.logoTransparent};
  }

  & span {
    position: absolute;
    left: 7%;
    transform: translateY(-10px);
    font-size: 20px;
    letter-spacing: ${p => p.theme.letterSpacings.logo};
    color: ${p => p.theme.colors.mainBgLight};
  }
`;
