import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';
import { HeaderWrapper, LogoWrapper } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <img
          src="https://images.pexels.com/photos/13200289/pexels-photo-13200289.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          alt="pic"
        />
      </Container>
    </HeaderWrapper>
  );
};
