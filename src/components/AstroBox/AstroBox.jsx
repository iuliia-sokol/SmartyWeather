import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAstroDataFromWeatherApi } from 'redux/location/locOperations';
import { getAstroData } from 'redux/location/locSelectors';
import { moonPhasesPng } from 'utils/moonPhases';
import moonrise from '../../images/moonrise-min.png';
import moonset from '../../images/moonset-min.png';
import phase from '../../images/waxing-gibbous-min.png';
import moon from '../../images/moon-min.png';
import sunrise from '../../images/sunrise-min.png';
import sunset from '../../images/sunset-min.png';

import {
  MoonBox,
  SunBox,
  MoonImg,
  AstroIndicator,
  MoonIndicatorsWrapper,
  SunIndicatorsWrapper,
} from './AstroBox.styled';
import { WrapperBox } from 'components/BoxWrapper/Wrapper';

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
    <WrapperBox>
      <MoonBox>
        <MoonImg src={moonPng} alt="moon phase" loading="lazy" />
        <MoonIndicatorsWrapper>
          <AstroIndicator
            src={moon}
            text="Moon illumination:"
            source={`${astro.moon_illumination} %`}
          />
          <AstroIndicator
            src={phase}
            text="Moon phase:"
            source={`${astro.moon_phase}`}
          />
          <AstroIndicator
            src={moonrise}
            text="Moonrise:"
            source={`${astro.moonrise}`}
          />
          <AstroIndicator
            src={moonset}
            text="Moonset:"
            source={`${astro.moonset}`}
          />
        </MoonIndicatorsWrapper>
      </MoonBox>
      <SunBox>
        <SunIndicatorsWrapper>
          <AstroIndicator
            src={sunrise}
            text="Sunrise:"
            source={`${astro.sunrise}`}
          />
          <AstroIndicator
            src={sunset}
            text="Sunset:"
            source={`${astro.sunset}`}
          />
        </SunIndicatorsWrapper>
      </SunBox>
    </WrapperBox>
  ) : (
    <div>No astro data available</div>
  );
}

export default React.memo(AstroUI);
