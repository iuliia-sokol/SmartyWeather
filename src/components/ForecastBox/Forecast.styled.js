import styled from 'styled-components';

export const ForecastWrapper = styled.li`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  padding: 16px;
  background: rgba(255, 255, 255, 0.28);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: ${p => p.theme.radii.main};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};

  @media screen and (min-width: 768px) {
    width: calc(100% / 3 - 16px);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    /* position: absolute;
    top: -10%; */
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const DateText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 28px;
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p => p.theme.colors.mainDark};

  @media screen and (min-width: 768px) {
    font-size: 46px;
  }
`;

export const ConditionText = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  & span {
    display: flex;
    padding: 10px;
    color: ${p => p.theme.colors.mainLight};
    background-color: ${p => p.theme.colors.mainAccentPink};
    border-radius: ${p => p.theme.radii.main};
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    justify-content: space-between;
    flex-grow: 1;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextRain = styled.div``;
