import styled from 'styled-components';

import paper from '../../images/old-paper.jpg';

export const View = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${paper});
  background-size: contain;

  z-index: -2;

  opacity: 0.5;
`;
