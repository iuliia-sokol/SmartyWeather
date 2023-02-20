import { NavLink } from 'react-router-dom';
import { EarthAnimationBox, Elipse } from './SearchLink.styled';
import sprite from '../../images/icons_sprite.svg';

export const SearchLink = () => {
  return (
    <NavLink to="/search">
      <div>
        <EarthAnimationBox>
          <Elipse>
            <use href={sprite + `#elipse`} />
          </Elipse>
        </EarthAnimationBox>
      </div>
    </NavLink>
  );
};
