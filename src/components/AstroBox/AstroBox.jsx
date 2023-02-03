import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAstroDataFromWeatherApi } from 'redux/location/locOperations';
import { getAstroData } from 'redux/location/locSelectors';
import { AstroWrapper } from './AstroBox.styled';

function AstroUI() {
  const astro = useSelector(getAstroData);

  //   console.log(astro);

  const dispatch = useDispatch();

  useEffect(() => {
    if (astro) {
      return;
    }
    dispatch(fetchAstroDataFromWeatherApi());
  }, [dispatch, astro]);

  return astro ? (
    <AstroWrapper>
      <p>
        Is moon up:
        <span>{astro.is_moon_up ? 'Yes' : 'No'}</span>
      </p>
      <p>
        Moon illumination:
        <span>{astro.moon_illumination} %</span>
      </p>
      <p>
        Moon phase:
        <span>{astro.moon_phase}</span>
      </p>
      <p>
        Moonrise:
        <span>{astro.moonrise}</span>
      </p>
      <p>
        Moonset:
        <span>{astro.moonset}</span>
      </p>
      <p>
        Is sun up:
        <span>{astro.is_sun_up ? 'Yes' : 'No'}</span>
      </p>
      <p>
        Sunrise:
        <span>{astro.sunrise}</span>
      </p>
      <p>
        Sunset:
        <span>{astro.sunset}</span>
      </p>
    </AstroWrapper>
  ) : (
    <div>No astro data available</div>
  );
}

export default React.memo(AstroUI);
