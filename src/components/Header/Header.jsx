import { Container } from 'components/Container/Container';
import { HistoryLink } from 'components/HistoryLink/HistoryLink';
import { Logo } from 'components/Logo/Logo';
import {
  HeaderContentWrapper,
  HeaderWrapper,
  LogoWrapper,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContentWrapper>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <HistoryLink />
        </HeaderContentWrapper>
      </Container>
    </HeaderWrapper>
  );
};
