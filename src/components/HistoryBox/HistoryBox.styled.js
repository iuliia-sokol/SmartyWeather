import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.main};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const EventsWrapper = styled.ul`
  position: relative;
  background: url('https://i.imgur.com/0kjMcUe.png');
  background-size: contain;
  background-position: center right;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding: 32px 24px 80px 24px;
  z-index: 1;
  filter: brightness(0.95) sepia(30%) saturate(80%);
  border-radius: 30px;
  height: 70vh;

  @media screen and (min-width: 768px) {
    padding: 56px 32px 80px 32px;
  }

  clip-path: polygon(
    0% 0%,
    0% 93%,
    5% 98%,
    6% 99%,
    8% 95%,
    12% 94%,
    15% 97%,
    17% 93%,
    20% 98%,
    22% 97%,
    25% 99%,
    31% 94%,
    35% 93%,
    39% 96%,
    43% 93%,
    45% 94%,
    47% 95%,
    50% 92%,
    52% 96%,
    54% 93%,
    58% 92%,
    60% 95%,
    62% 93%,
    65% 96%,
    69% 93%,
    72% 93%,
    75% 94%,
    79% 97%,
    81% 94%,
    85% 93%,
    88% 92%,
    90% 95%,
    93% 93%,
    95% 92%,
    97% 95%,
    100% 97%,
    100% 0%
  );
  overflow: auto;

  ::-webkit-scrollbar {
    width: 16px;

    @media screen and (min-width: 768px) {
      width: 20px;
    }
  }

  ::-webkit-scrollbar-track {
    background: #ae9d72;
    background-image: url('https://www.transparenttextures.com/patterns/black-paper.png');
  }

  ::-webkit-scrollbar-thumb {
    background: #ae9d72;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #8bba98;
  }
`;
