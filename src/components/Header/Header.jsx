import { Container } from 'components/Container/Container';
import { HistoryLink } from 'components/HistoryLink/HistoryLink';
import { Logo } from 'components/Logo/Logo';
import { SearchLink } from 'components/SearchLink/SearchLink';
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
            <Logo position="header" />
          </LogoWrapper>
          <SearchLink />
          <HistoryLink />
        </HeaderContentWrapper>
      </Container>
    </HeaderWrapper>
  );
};
