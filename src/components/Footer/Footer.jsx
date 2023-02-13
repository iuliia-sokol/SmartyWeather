import { Container } from 'components/Container/Container';

import weatherApiLogo from '../../images/weatherapi_logo.webp';
import openMeteoLogo from '../../images/open-meteo.jpg';
import figma from '../../images/figma.png';
import icon8 from '../../images/Icons8.png';
import amcharts from '../../images/amcharts.png';
import sprite from '../../images/icons_sprite.svg';

import {
  ContentWrapper,
  CopyrightWrapper,
  LinksWrapper,
  LogoWrapper,
  Text,
} from './Footer.styled';
import { Logo } from 'components/Logo/Logo';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <ContentWrapper>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <CopyrightWrapper>
            <Text>
              Copyright&copy; 2023
              <br />
              All rights reserved
            </Text>
          </CopyrightWrapper>
          <LinksWrapper>
            <Text>Powered by</Text>
            <div>
              <a href="https://www.weatherapi.com/" title="Free Weather API">
                <img
                  src={weatherApiLogo}
                  alt="Weather data by WeatherAPI.com"
                  border="0"
                />
              </a>
              <a href="https://open-meteo.com/">
                <img
                  src={openMeteoLogo}
                  alt="Weather data by Open-Meteo.com"
                  border="0"
                />
              </a>
            </div>
            <Text>Icons credits</Text>
            <div>
              <a href="https://www.figma.com/community">
                <img src={figma} alt="Figma community" border="0" />
              </a>
              <a href="https://icons8.com/">
                <img src={icon8} alt="icons8.com" border="0" />
              </a>
              <a href="https://www.amcharts.com/">
                <img src={amcharts} alt="www.amcharts.com" border="0" />
              </a>
              <a href="https://www.flaticon.com/">
                <svg viewBox="0 0 36 36">
                  <use href={sprite + `#flaticon`} />
                </svg>
              </a>
              <a href="https://www.svgrepo.com/">
                <svg viewBox="0 0 36 36">
                  <use href={sprite + `#svg-repo`} />
                </svg>
              </a>
            </div>
          </LinksWrapper>
        </ContentWrapper>
      </Container>
    </footer>
  );
};
