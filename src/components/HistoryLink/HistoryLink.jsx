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
        <Elipse width={46} height={42} viewBox="0 0 36 36">
          <use href={sprite + `#elipse`} />
        </Elipse>
        <HourglassContainer>
          <HourglassCurves></HourglassCurves>
          <HourglassCapTop></HourglassCapTop>
          <HourglassGlassTop></HourglassGlassTop>
          <HourglassSand></HourglassSand>
          <HourglassSandStream></HourglassSandStream>
          <HourglassCapBottom></HourglassCapBottom>
          <HourglassGlass></HourglassGlass>
        </HourglassContainer>
      </HourglassBackground>
    </NavLink>
  );
};