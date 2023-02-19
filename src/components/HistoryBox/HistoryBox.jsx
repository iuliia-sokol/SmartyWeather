import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory } from 'redux/location/locOperations';
import { getHistory } from 'redux/location/locSelectors';
import { WrapperBox } from 'components/BoxWrapper/Wrapper';
import { EventsWrapper } from './HistoryBox.styled';

function HistoryUI() {
  const historyEvents = useSelector(getHistory);
  const [events, setEvents] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHistory());
    if (historyEvents) {
      setEvents(historyEvents);
    }
  }, [dispatch, historyEvents]);

  return events ? (
    <WrapperBox>
      <EventsWrapper>
        {events.map(el => {
          return (
            <li key={el.text} year={el.year}>
              {el.text}
            </li>
          );
        })}
      </EventsWrapper>
    </WrapperBox>
  ) : (
    <div>No history data available</div>
  );
}

export default React.memo(HistoryUI);
