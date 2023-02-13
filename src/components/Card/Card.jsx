import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Snowfall from 'react-snowfall';
import Rainfall from 'react-rainfall-animation/src/Rain';
import ObliqueRain from 'react-rainfall-animation/src/ObliqueRain';
// import { fetchPexelsImage } from 'redux/location/locOperations';
import { useState } from 'react';
import { Card } from './Card.styled';
import {
  getAdditionalCurrentWeather,
  getCityImages,
  // getCityName,
  // getCurrentWeather,
} from 'redux/location/locSelectors';
import { useMediaQuery } from 'hooks/useMedia';
import bgImgMob from '../../images/umbrella-red-wallpaper-mob.jpg';
import bgImg from '../../images/umbrella-red-wallpaper.jpg'; // 'https://www.wallpaperflare.com/static/79/210/459/nature-sky-umbrella-red-wallpaper-preview.jpg';
import { Storm } from 'components/StormAnimation/Storm';
import { Fog } from 'components/FogAnimation/Fog';

export const CardUI = ({ children }) => {
  const isRowBased = useMediaQuery('(min-width: 768px)');

  const images = useSelector(getCityImages);
  // const weather = useSelector(getCurrentWeather);
  const currentWeather = useSelector(getAdditionalCurrentWeather);

  const [image, setImage] = useState(bgImg);
  const [imageMob, setImageMob] = useState(bgImgMob);
  const [weatherCode, setWeatherCode] = useState('');
  const [showSnow, setShowSnow] = useState(false);
  const [showRain, setShowRain] = useState(false);
  const [showDrizzle, setShowDrizzle] = useState(false);
  const [showHeavyDrizzle, setShowHeavyDrizzle] = useState(false);
  const [showStorm, setShowStorm] = useState(false);
  const [showBigSnow, setShowBigSnow] = useState(false);
  const [showFog, setShowFog] = useState(false);
  const [showThunderSnow, setShowThunderSnow] = useState(false);

  useEffect(() => {
    if (images.length === 0) {
      return;
    }
    if (images.length === 1) {
      setImage(images[0].landscape);
      setImageMob(images[0].portrait);
    }
    if (images.length > 1) {
      const random = Math.floor(Math.random() * images.length);
      setImage(images[random].landscape);
      setImageMob(images[random].portrait);
    }
  }, [images]);

  console.log(image);
  useEffect(() => {
    if (currentWeather) {
      // setWeatherCode(weather.current_weather.weathercode);
      setWeatherCode(currentWeather.condition.code);
    }
    if (
      // weatherCode === 77 ||
      // weatherCode === 85 ||
      // weatherCode === 71 ||
      // weatherCode === 73

      weatherCode === 1066 ||
      weatherCode === 1210 ||
      weatherCode === 1213 ||
      weatherCode === 1216 ||
      weatherCode === 1219 ||
      weatherCode === 1261 ||
      weatherCode === 1255
    ) {
      setShowSnow(true);
      setShowRain(false);
      setShowDrizzle(false);
      setShowStorm(false);
      setShowBigSnow(false);
      setShowFog(false);
      setShowThunderSnow(false);
      setShowHeavyDrizzle(false);
    } else if (
      weatherCode === 1063 ||
      weatherCode === 1069 ||
      weatherCode === 1072 ||
      weatherCode === 1150 ||
      weatherCode === 1153 ||
      weatherCode === 1168 ||
      weatherCode === 1204 ||
      weatherCode === 1249

      // weatherCode === 51 ||
      // weatherCode === 53 ||
      // weatherCode === 55 ||
      // weatherCode === 56 ||
      // weatherCode === 57
    ) {
      setShowDrizzle(true);
      setShowRain(false);
      setShowSnow(false);
      setShowStorm(false);
      setShowBigSnow(false);
      setShowFog(false);
      setShowThunderSnow(false);
      setShowHeavyDrizzle(false);
    } else if (
      weatherCode === 1180 ||
      weatherCode === 1183 ||
      weatherCode === 1186 ||
      weatherCode === 1189 ||
      weatherCode === 1192 ||
      weatherCode === 1195 ||
      weatherCode === 1198 ||
      weatherCode === 1201 ||
      weatherCode === 1240

      // weatherCode === 61 ||
      // weatherCode === 63 ||
      // weatherCode === 66 ||
      // weatherCode === 80 ||
      // weatherCode === 81
    ) {
      setShowRain(true);
      setShowDrizzle(false);
      setShowSnow(false);
      setShowStorm(false);
      setShowBigSnow(false);
      setShowFog(false);
      setShowThunderSnow(false);
      setShowHeavyDrizzle(false);
    } else if (
      weatherCode === 1087 ||
      weatherCode === 1246 ||
      weatherCode === 1243 ||
      weatherCode === 1273 ||
      weatherCode === 1276

      // weatherCode === 95 ||
      // weatherCode === 96 ||
      // weatherCode === 99 ||
      // weatherCode === 82 ||
      // weatherCode === 65 ||
      // weatherCode === 67
    ) {
      setShowStorm(true);
      setShowDrizzle(false);
      setShowSnow(false);
      setShowRain(false);
      setShowBigSnow(false);
      setShowFog(false);
      setShowThunderSnow(false);
      setShowHeavyDrizzle(false);
    } else if (
      weatherCode === 1114 ||
      weatherCode === 1117 ||
      weatherCode === 1222 ||
      weatherCode === 1225 ||
      weatherCode === 1237 ||
      weatherCode === 1264 ||
      weatherCode === 1258

      // weatherCode === 75 ||
      // weatherCode === 86
    ) {
      setShowBigSnow(true);
      setShowStorm(false);
      setShowDrizzle(false);
      setShowSnow(false);
      setShowRain(false);
      setShowFog(false);
      setShowThunderSnow(false);
      setShowHeavyDrizzle(false);
    } else if (
      // weatherCode === 45 ||
      // weatherCode === 48

      weatherCode === 1009 ||
      weatherCode === 1030 ||
      weatherCode === 1006 ||
      weatherCode === 1135 ||
      weatherCode === 1147
    ) {
      setShowFog(true);
      setShowStorm(false);
      setShowDrizzle(false);
      setShowSnow(false);
      setShowRain(false);
      setShowBigSnow(false);
      setShowThunderSnow(false);
      setShowHeavyDrizzle(false);
    } else if (weatherCode === 1279 || weatherCode === 1282) {
      setShowThunderSnow(true);
      setShowStorm(false);
      setShowDrizzle(false);
      setShowSnow(false);
      setShowRain(false);
      setShowBigSnow(false);
      setShowFog(false);
      setShowHeavyDrizzle(false);
    } else if (
      weatherCode === 1252 ||
      weatherCode === 1207 ||
      weatherCode === 1171
    ) {
      setShowHeavyDrizzle(true);
      setShowStorm(false);
      setShowDrizzle(false);
      setShowSnow(false);
      setShowRain(false);
      setShowBigSnow(false);
      setShowFog(false);
      setShowThunderSnow(false);
    }
  }, [currentWeather, weatherCode]);

  return (
    images && (
      <>
        <Card
          style={{
            backgroundImage: !isRowBased ? `url(${imageMob})` : `url(${image})`,
          }}
        >
          <p>{images.length}</p>
          {children}
        </Card>
        {showSnow && (
          <Snowfall
            style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh',
            }}
            snowflakeCount={200}
          />
        )}
        {showBigSnow && (
          <Snowfall
            style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh',
            }}
            snowflakeCount={750}
            wind={[2.5, 6.5]}
            speed={[1.5, 5.5]}
          />
        )}
        {showRain && (
          <div id="Rain">
            <Rainfall dropletsAmount={1000} />
          </div>
        )}
        {showDrizzle && (
          <div id="Rain">
            <ObliqueRain dropletsAmount={300} amplitude={100} />
          </div>
        )}
        {showHeavyDrizzle && (
          <div id="Rain">
            <ObliqueRain dropletsAmount={1000} amplitude={100} />
          </div>
        )}
        {showStorm && (
          <div id="Rain">
            <Rainfall dropletsAmount={1000} />
            <Storm />
          </div>
        )}
        {showFog && <Fog />}
        {showThunderSnow && (
          <>
            <Snowfall
              style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
              }}
              snowflakeCount={750}
              wind={[2.5, 6.5]}
              speed={[1.5, 5.5]}
            />
            <Storm />
          </>
        )}
      </>
    )
  );
};
