import { Container } from 'components/Container/Container';
import { LogoWrapper } from './Header.styled';

import logo from '../../images/logo-min.png';

export const Header = () => {
  return (
    <header>
      <Container>
        <LogoWrapper>
          <img src={logo} alt="logo" loading="lazy" />
        </LogoWrapper>
      </Container>
    </header>
  );
};
