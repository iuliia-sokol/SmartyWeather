import styled from 'styled-components';

export const HeaderText = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 32px;
  margin-top: -32px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 36px;
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p => p.theme.colors.mainDark};

  & img {
    width: 40px;
  }

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    font-size: 72px;
  }
`;
