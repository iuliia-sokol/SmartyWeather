import { CardUI } from 'components/Card/Card';
import { SearchForm } from 'components/SearchForm/SearchForm';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGeoImage } from 'redux/location/locOperations';
import {
  getCityImages,
  getCityName,
  getGeoImages,
} from 'redux/location/locSelectors';

const { Container } = require('components/Container/Container');

const SearchPage = () => {
  const city = useSelector(getCityName);
  const images = useSelector(getGeoImages);
  const dispatch = useDispatch();
  const elementRef = useRef();
  const [isHideSuggs, setIsHideSuggs] = useState(false);
  const [selection, setSelection] = useState(false);

  useEffect(() => {
    if (city && images.length === 0) {
      dispatch(fetchGeoImage());
    }
  }, [city, dispatch, images.length]);

  const onBackdropClick = event => {
    if (event.currentTarget !== elementRef) {
      hideSuggs();
    }
  };
  const hideSuggs = value => {
    setIsHideSuggs(true);
  };
  return (
    <main
      style={{
        minHeight: '70vh',
      }}
      onClick={onBackdropClick}
    >
      <CardUI
        selector={selection ? getCityImages : getGeoImages}
        page="search"
      />
      <Container>
        <SearchForm
          elementRef={elementRef}
          isHideSuggs={isHideSuggs}
          setIsHideSuggs={setIsHideSuggs}
          hideSuggs={hideSuggs}
          selection={selection}
          setSelection={setSelection}
        />
      </Container>
    </main>
  );
};

export default React.memo(SearchPage);
