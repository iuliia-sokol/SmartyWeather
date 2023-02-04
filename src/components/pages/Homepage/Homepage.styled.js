import styled from 'styled-components';

export const DataWrapper = styled.div`
  display: flex;
  border-radius: 30px;
  padding: 32px;
  background: rgba(255, 255, 255, 0.23);
  box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45),
    inset 5px 5px 9px rgba(94, 104, 121, 0.3);
  backdrop-filter: blur(5.3px);
  -webkit-backdrop-filter: blur(5.3px);
  border: 1px solid rgba(255, 255, 255, 0.77);
`;

export const CityName = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p => p.theme.colors.mainDark};
`;
