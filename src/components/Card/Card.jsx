import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPexelsImage } from 'redux/location/locOperations';
import { useState } from 'react';
import { Card } from './Card.styled';
import { getCityImages, getCityName } from 'redux/location/locSelectors';

export function CardUI() {
  const city = useSelector(getCityName);
  const images = useSelector(getCityImages);

  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    if (city) {
      dispatch(fetchPexelsImage());
    }
  }, [city, dispatch]);

  useEffect(() => {
    if (images.length === 1) {
      setImage(images[0].landscape);
    }
    if (images.length > 1) {
      const random = Math.floor(Math.random() * images.length);
      setImage(images[random].landscape);
    }
  }, [images]);

  return (
    <Card>
      <img
        alt={city}
        src={
          image ??
          'https://www.wallpaperflare.com/static/79/210/459/nature-sky-umbrella-red-wallpaper-preview.jpg'
        }
      />
    </Card>
  );
}
