import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snowfall from 'react-snowfall';
import Rainfall from 'react-rainfall-animation/src/Rain';
import ObliqueRain from 'react-rainfall-animation/src/ObliqueRain';
import { fetchPexelsImage } from 'redux/location/locOperations';
import { useState } from 'react';
import { Card } from './Card.styled';
import {
  getCityImages,
  getCityName,
  getCurrentWeather,
} from 'redux/location/locSelectors';
import { useMediaQuery } from 'hooks/useMedia';
import bgImgMob from '../../images/umbrella-red-wallpaper-mob.jpg';
import bgImg from '../../images/umbrella-red-wallpaper.jpg'; // 'https://www.wallpaperflare.com/static/79/210/459/nature-sky-umbrella-red-wallpaper-preview.jpg';

export const CardUI = ({ children }) => {
  const isRowBased = useMediaQuery('(min-width: 500px)');
  const city = useSelector(getCityName);
  const images = useSelector(getCityImages);
  const weather = useSelector(getCurrentWeather);

  const [image, setImage] = useState('');
  const [imageMob, setImageMob] = useState('');
  const [weatherCode, setWeatherCode] = useState('');
  const [showSnow, setShowSnow] = useState(false);
  const [showRain, setShowRain] = useState(false);
  const [showDrizzle, setShowDrizzle] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (city) {
      dispatch(fetchPexelsImage());
    }
  }, [city, dispatch]);

  useEffect(() => {
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

  useEffect(() => {
    if (weather) {
      // setWeatherCode(weather.current_weather.weathercode);
      setWeatherCode(53);
    }
    if (
      weatherCode === 77 ||
      weatherCode === 85 ||
      weatherCode === 86 ||
      weatherCode === 71 ||
      weatherCode === 73 ||
      weatherCode === 75
    ) {
      setShowSnow(true);
      setShowRain(false);
      setShowDrizzle(false);
    } else if (
      weatherCode === 51 ||
      weatherCode === 53 ||
      weatherCode === 55 ||
      weatherCode === 56 ||
      weatherCode === 57
    ) {
      setShowDrizzle(true);
      setShowRain(false);
      setShowSnow(false);
    } else if (
      weatherCode === 61 ||
      weatherCode === 63 ||
      weatherCode === 65 ||
      weatherCode === 66 ||
      weatherCode === 67 ||
      weatherCode === 80 ||
      weatherCode === 81 ||
      weatherCode === 82
    ) {
      setShowRain(true);
      setShowDrizzle(false);
      setShowSnow(false);
    }
  }, [weather, weatherCode]);

  // console.log(weatherCode);

  return (
    <>
      <Card
        style={{
          backgroundImage: !isRowBased
            ? `url(${imageMob ?? bgImgMob})`
            : `url(${image ?? bgImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
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
      {showRain && (
        <div id="Rain">
          <Rainfall dropletsAmount={1500} />
        </div>
      )}
      {showDrizzle && (
        <div id="Rain">
          <ObliqueRain dropletsAmount={300} amplitude={100} />
        </div>
      )}
    </>
  );
};
