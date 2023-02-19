import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchHistory, fetchHistoryImage } from 'redux/location/locOperations';
import { Container } from 'components/Container/Container';
import HistoryBox from 'components/HistoryBox/HistoryBox';
import { HistoryCardUI } from 'components/Card/HistoryCard';

const HistoryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHistory());
    dispatch(fetchHistoryImage());
  }, [dispatch]);

  return (
    <main
      style={{
        minHeight: '70vh',
      }}
    >
      <HistoryCardUI />
      <Container>
        <HistoryBox />
      </Container>
    </main>
  );
};

export default HistoryPage;
