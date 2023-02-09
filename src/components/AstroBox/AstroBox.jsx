import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAstroDataFromWeatherApi } from 'redux/location/locOperations';
import { getAstroData } from 'redux/location/locSelectors';
import { moonPhasesPng } from 'utils/moonPhases';
import { IndicatorText } from 'components/MainBox/MainBox.styled';
import moonrise from '../../images/moonrise.png';
import moonset from '../../images/moonset.png';
import phase from '../../images/waxing-gibbous.png';
import moon from '../../images/moon.png';
import sunrise from '../../images/sunrise.png';
import sunset from '../../images/sunset.png';

import {
  AstroWrapper,
  MoonBox,
  SunBox,
  IndicatorImg,
  MoonImg,
  AstroIndicator,
  MoonIndicatorsWrapper,
  SunIndicatorsWrapper,
} from './AstroBox.styled';

function AstroUI() {
  const astro = useSelector(getAstroData);
  const moonPhase = astro.moon_phase;
  const [moonPng, setMoonPng] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (astro) {
      const moonImg = moonPhasesPng.find(
        cond => cond.phase.toLowerCase() === moonPhase.toLowerCase()
      ).png;
      setMoonPng(moonImg);
      return;
    }
    dispatch(fetchAstroDataFromWeatherApi());
  }, [dispatch, astro, moonPhase]);

  return astro && moonPng ? (
    <AstroWrapper>
      <MoonBox>
        <MoonImg src={moonPng} alt="moon phase" loading="lazy" />
        <MoonIndicatorsWrapper>
          <AstroIndicator>
            <IndicatorImg src={moon} alt="moon illumination" loading="lazy" />
            <IndicatorText>Moon illumination:</IndicatorText>

            <span>{astro.moon_illumination} %</span>
          </AstroIndicator>
          <AstroIndicator>
            <IndicatorImg src={phase} alt="moon phase" loading="lazy" />
            <IndicatorText>Moon phase:</IndicatorText>

            <span>{astro.moon_phase}</span>
          </AstroIndicator>
          <AstroIndicator>
            <IndicatorImg src={moonrise} alt="moonrise" loading="lazy" />
            <IndicatorText>Moonrise:</IndicatorText>
            <span>{astro.moonrise}</span>
          </AstroIndicator>

          <AstroIndicator>
            <IndicatorImg src={moonset} alt="moonset" loading="lazy" />
            <IndicatorText>Moonset:</IndicatorText>
            <span>{astro.moonset}</span>
          </AstroIndicator>
        </MoonIndicatorsWrapper>
      </MoonBox>
      <SunBox>
        <SunIndicatorsWrapper>
          <AstroIndicator>
            <IndicatorImg src={sunrise} alt="sunrise" loading="lazy" />
            <IndicatorText>Sunrise:</IndicatorText>
            <span>{astro.sunrise}</span>
          </AstroIndicator>
          <AstroIndicator>
            <IndicatorImg src={sunset} alt="sunset" loading="lazy" />
            <IndicatorText>Sunset:</IndicatorText>
            <span>{astro.sunset}</span>
          </AstroIndicator>
        </SunIndicatorsWrapper>
      </SunBox>
    </AstroWrapper>
  ) : (
    <div>No astro data available</div>
  );
}

export default React.memo(AstroUI);
