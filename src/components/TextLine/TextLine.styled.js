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
  text-shadow: 2px 2px 2px #fbfff3;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
