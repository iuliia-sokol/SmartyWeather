import { Container } from 'components/Container/Container';
import { Elipse, HeaderWrapper, Logo, LogoWrapper } from './Header.styled';

// import logo from '../../images/logo-min.png';
import sprite from '../../images/icons_sprite.svg';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <LogoWrapper>
          {/* <img src={logo} alt="logo" loading="lazy" /> */}
          <Elipse width={46} height={42} viewBox="0 0 36 36">
            <use href={sprite + `#elipse`} />
          </Elipse>
          <Logo>
            <p>smarty</p>
            <span>Weather</span>
          </Logo>
        </LogoWrapper>
      </Container>
    </HeaderWrapper>
  );
};
