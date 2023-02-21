import styled from 'styled-components';

import paper from '../../images/old-paper.jpg';
import compass from '../../images/compass.jpg';

export const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: ${p =>
    p.image
      ? p.image
      : 'linear-gradient(47.75deg, #082276 7.07%, #030f34 97.3%), #082276;'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
`;

export const View = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: ${p =>
    p.page === 'home' ? 'cover' : p.page === 'history' ? 'contain' : 'cover'};
  z-index: -2;
  background: ${p =>
    p.page === 'home'
      ? 'linear-gradient(45deg, rgba(245, 70, 66, 0.45), rgba(8, 83, 156, 0.45))'
      : p.page === 'history'
      ? `url(${paper})`
      : `url(${compass})`};
  background-position: ${p => (p.page === 'home' ? 'unset' : 'top center')};

  /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002f4b', endColorstr='#00000000',GradientType=0 ); */
  opacity: ${p =>
    p.page === 'home' ? '0.8' : p.page === 'history' ? '0.5' : '0.05'};
`;
