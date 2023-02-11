import styled from 'styled-components';

export const Header = styled.h3`
  text-align: center;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p => p.theme.colors.mainDark};

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 32px;
  }
`;
