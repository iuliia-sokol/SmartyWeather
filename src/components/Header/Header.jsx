import { Container } from 'components/Container/Container';
import { HistoryLink } from 'components/HistoryLink/HistoryLink';
import { Logo } from 'components/Logo/Logo';
import { SearchLink } from 'components/SearchLink/SearchLink';
import {
  HeaderContentWrapper,
  HeaderWrapper,
  LinksWrapper,
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
          <LinksWrapper>
            <SearchLink />
            <HistoryLink />
          </LinksWrapper>
        </HeaderContentWrapper>
      </Container>
    </HeaderWrapper>
  );
};
