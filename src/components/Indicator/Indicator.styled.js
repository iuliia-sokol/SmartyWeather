import styled from 'styled-components';

export const Indicator = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(50% - 32px);
  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: ${p => p.theme.radii.main};
  padding: 8px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p =>
    p.color === 'blue'
      ? p.theme.colors.accentBlue
      : p.color === 'pink'
      ? p.theme.colors.accentPink
      : p.color === 'violet'
      ? p.theme.colors.accentViolet
      : p.theme.colors.textGrey};
  background-color: ${p =>
    p.color === 'blue'
      ? p.theme.colors.bgBlue
      : p.color === 'pink'
      ? p.theme.colors.bgPink
      : p.color === 'violet'
      ? p.theme.colors.bgViolet
      : p.theme.colors.bgGrey};

  & svg {
    width: 20px;
    height: 20px;
  }

  & img {
    width: 30px;
    height: 30px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 20%;

    & img {
      width: 40px;
      height: 40px;
    }

    @media screen and (min-width: 1280px) {
      width: fit-content;
    }
  }
`;

export const IndicatorText = styled.span`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline-block;
    margin-right: 8px;
  }
`;

export const IndicatorImg = styled.img`
  display: block;
  width: 40px;
  height: auto;
  margin: 0 !important;
`;
