import { useMediaQuery } from 'hooks/useMedia';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getGeoImages } from 'redux/location/locSelectors';
import { Card } from './Card.styled';

export const SearchCardUI = () => {
  const isRowBased = useMediaQuery('(min-width: 1280px)');
  const images = useSelector(getGeoImages);
  const [image, setImage] = useState('');
  const [imageMob, setImageMob] = useState('');

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

  return (
    <Card image={!isRowBased ? `url(${imageMob})` : `url(${image})`}>
      {/* <View /> */}
    </Card>
  );
};
