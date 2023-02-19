import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchHistory } from 'redux/location/locOperations';
import { Container } from 'components/Container/Container';
import HistoryBox from 'components/HistoryBox/HistoryBox';

const HistoryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  return (
    <main
      style={{
        minHeight: '70vh',
      }}
    >
      <Container>
        <HistoryBox />
      </Container>
    </main>
  );
};

export default HistoryPage;
