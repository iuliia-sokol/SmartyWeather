import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPexelsImage } from 'redux/location/locOperations';
import { useState } from 'react';
import { Card } from './Card.styled';
import { getCityImages, getCityName } from 'redux/location/locSelectors';
import { useMediaQuery } from 'hooks/useMedia';

export function CardUI() {
  const isRowBased = useMediaQuery('(min-width: 500px)');
  const city = useSelector(getCityName);
  const images = useSelector(getCityImages);
  const defaultImg =
    'https://www.wallpaperflare.com/static/79/210/459/nature-sky-umbrella-red-wallpaper-preview.jpg';
  const [image, setImage] = useState('');
  const [imageMob, setImageMob] = useState('');

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

  return (
    <Card
      style={{
        backgroundImage: !isRowBased
          ? `url(${imageMob ?? defaultImg})`
          : `url(${image ?? defaultImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    ></Card>
  );
}
