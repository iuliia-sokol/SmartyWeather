import React from 'react';
import { useSelector } from 'react-redux';
import { getCityName } from 'redux/location/locSelectors';

const { Container } = require('components/Container/Container');

const SearchPage = () => {
  const city = useSelector(getCityName);
  console.log(city);
  return (
    <main
      style={{
        minHeight: '70vh',
      }}
    >
      <Container></Container>
    </main>
  );
};

export default React.memo(SearchPage);
