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
      </Container>
    </HeaderWrapper>
  );
};
