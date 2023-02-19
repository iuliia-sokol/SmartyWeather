import { NavLink } from 'react-router-dom';
import sprite from '../../images/icons_sprite.svg';
import { Elipse, LogoText, LogoWrapper } from './Logo.styled';

export const Logo = () => {
  return (
    <NavLink to="/">
      <LogoWrapper>
        <Elipse width={46} height={42} viewBox="0 0 36 36">
          <use href={sprite + `#elipse`} />
        </Elipse>
        <LogoText>
          <p>smarty</p>
          <span>Weather</span>
        </LogoText>
      </LogoWrapper>
    </NavLink>
  );
};
