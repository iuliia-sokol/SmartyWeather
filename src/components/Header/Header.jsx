import { Container } from 'components/Container/Container';
import { HistoryLink } from 'components/HistoryLink/HistoryLink';
import { Logo } from 'components/Logo/Logo';
import { HeaderWrapper, LogoWrapper } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <LogoWrapper>
          <Logo />
          <HistoryLink />
        </LogoWrapper>
      </Container>
    </HeaderWrapper>
  );
};
