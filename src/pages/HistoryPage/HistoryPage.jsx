import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory, fetchHistoryImage } from 'redux/location/locOperations';
import { Container } from 'components/Container/Container';
import HistoryBox from 'components/HistoryBox/HistoryBox';
import { HeaderText } from './HistoryPage.styled';
import { getHistoryImages } from 'redux/location/locSelectors';
import { CardUI } from 'components/Card/Card';

const HistoryPage = () => {
  const historyImages = useSelector(getHistoryImages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHistory());
    if (historyImages.length === 0) {
      dispatch(fetchHistoryImage());
    }
  }, [dispatch, historyImages.length]);

  return (
    <main
      style={{
        minHeight: '70vh',
      }}
    >
      <CardUI selector={getHistoryImages} page="history" />
      <Container>
        <HeaderText>This day in history</HeaderText>
        <HistoryBox />
      </Container>
    </main>
  );
};

export default React.memo(HistoryPage);
