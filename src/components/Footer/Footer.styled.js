import styled from 'styled-components';

export const ContentWrapper = styled.div`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p => p.theme.colors.mainLight};
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  @media screen and (min-width: 1280px) {
    align-items: center;
    margin-top: 0;
  }
`;

export const CopyrightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: calc(100% / 3 - 32px);

  @media screen and (min-width: 1280px) {
    align-items: center;
    justify-content: center;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: calc(100% / 3 - 32px);
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: calc(100% / 3 - 32px);
  align-items: flex-end;

  & div {
    display: flex;
    gap: 8px;

    @media screen and (min-width: 1280px) {
      gap: 16px;
    }

    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px;
      background-color: rgba(255, 255, 255, 0.48);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);

      & img,
      & svg {
        height: 20px;
      }

      @media screen and (min-width: 1280px) {
        & img,
        & svg {
          height: 30px;
        }
      }
    }
  }
`;

export const Text = styled.p``;
