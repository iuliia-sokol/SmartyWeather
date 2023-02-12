import styled from 'styled-components';
import { keyframes } from 'styled-components';

import lightiningPng from '../../images/lightining.png';

const lightining = keyframes`

    0%{
        opacity: 0;
    }
    20%{
        opacity: 0;
    }
    21%{
        opacity: 1;
    }
    25%{
        opacity: 0;
    }
    30%{
        opacity: 0;
    }
    31%{
        opacity: 1;
    }
    35%{
        opacity: 0;
    }
    100%{
        opacity: 0;
    }
`;

export const Lightning = styled.div`
  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url(${lightiningPng});
    transform: rotate(180deg);
    animation: ${lightining} 4s linear infinite;
    opacity: 1;
  }
`;
