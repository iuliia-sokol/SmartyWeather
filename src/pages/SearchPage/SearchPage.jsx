import { ButtonUI } from 'components/Button/Button';
import { CardUI } from 'components/Card/Card';
import { MainBoxUI } from 'components/MainBox/MainBox';
import { SearchForm } from 'components/SearchForm/SearchForm';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGeoImage } from 'redux/location/locOperations';
import {
  getAdditionalCurrentWeather,
  getCityImages,
  getCityName,
  getGeoImages,
  getCurrentWeather,
  getForcast,
} from 'redux/location/locSelectors';
import { SearchMoreButton } from './SearchPage.styled';

const { Container } = require('components/Container/Container');

const SearchPage = () => {
  const dispatch = useDispatch();

  const city = useSelector(getCityName);
  const weather = useSelector(getCurrentWeather);
  const extraWeather = useSelector(getAdditionalCurrentWeather);
  const images = useSelector(getGeoImages);
  const forecast = useSelector(getForcast);
  const elementRef = useRef();
  const [isHideSuggs, setIsHideSuggs] = useState(false);
  const [selection, setSelection] = useState(false);
  const [showForm, setShowForm] = useState(true);

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
  const hideSuggs = () => {
    setIsHideSuggs(true);
  };

  const onSearchMoreBtnClick = () => {
    setShowForm(!showForm);
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
        {showForm ? (
          <SearchForm
            elementRef={elementRef}
            isHideSuggs={isHideSuggs}
            setIsHideSuggs={setIsHideSuggs}
            hideSuggs={hideSuggs}
            selection={selection}
            setSelection={setSelection}
            setShowForm={setShowForm}
          />
        ) : (
          <>
            <SearchMoreButton
              type="button"
              text="Search other location"
              onClick={onSearchMoreBtnClick}
            >
              Search other location
            </SearchMoreButton>
          </>
        )}
        {selection && weather && extraWeather && forecast && <MainBoxUI />}
      </Container>
    </main>
  );
};

export default React.memo(SearchPage);
