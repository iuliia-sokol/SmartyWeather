import styled from 'styled-components';
import { keyframes } from 'styled-components';

const text = keyframes`
from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
  `;

export const TextContainer = styled.div`
  /* position: absolute; */
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 16px;
  padding: 8px;
  /* background-color: rgba(255, 255, 255, 0.23); */
  /* box-shadow: -5px -5px 70px #fff; */
  backdrop-filter: blur(0.3px);
  -webkit-backdrop-filter: blur(0.3px);
`;

export const RunningText = styled.div`
  font-size: 20px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p => p.theme.colors.textGrey};
  width: max-content;
  display: inline-flex;
  animation: ${text} 25s linear infinite;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
