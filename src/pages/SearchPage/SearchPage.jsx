import { CardUI } from 'components/Card/Card';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGeoImage } from 'redux/location/locOperations';
import { getCityName, getGeoImages } from 'redux/location/locSelectors';

const { Container } = require('components/Container/Container');

const SearchPage = () => {
  const city = useSelector(getCityName);
  const images = useSelector(getGeoImages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (city && images.length === 0) {
      dispatch(fetchGeoImage());
    }
  }, [city, dispatch, images.length]);

  return (
    <main
      style={{
        minHeight: '70vh',
      }}
    >
      <CardUI selector={getGeoImages} page="search" />
      <Container></Container>
    </main>
  );
};

export default React.memo(SearchPage);
