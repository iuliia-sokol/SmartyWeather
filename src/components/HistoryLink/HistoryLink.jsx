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
} from './HistoryLink.styled';

export const HistoryLink = () => {
  return (
    <NavLink to="/history">
      <HourglassBackground>
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
