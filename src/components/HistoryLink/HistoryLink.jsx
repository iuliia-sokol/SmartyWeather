import { NavLink } from 'react-router-dom';
import {
  HourglassBackground,
  HourglassCapBottom,
  HourglassCapTop,
  HourglassContainer,
  HourglassCurves,
  HourglassGlass,
  HourglassGlassTop,
  HourglassSand,
  HourglassSandStream,
  Elipse,
} from './HistoryLink.styled';
import sprite from '../../images/icons_sprite.svg';

export const HistoryLink = () => {
  return (
    <NavLink to="/history">
      <HourglassBackground>
        <Elipse>
          <use href={sprite + `#elipse`} />
        </Elipse>
        <HourglassContainer>
          <HourglassCurves />
          <HourglassCapTop />
          <HourglassGlassTop />
          <HourglassSand />
          <HourglassSandStream />
          <HourglassCapBottom />
          <HourglassGlass />
        </HourglassContainer>
      </HourglassBackground>
    </NavLink>
  );
};
