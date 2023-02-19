import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from 'redux/location/locSelectors';
import { ContentWrapper, EventsWrapper } from './HistoryBox.styled';

function HistoryUI() {
  const historyEvents = useSelector(getHistory);
  const [events, setEvents] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (historyEvents.length > 0) {
      setEvents(historyEvents);
    }
  }, [dispatch, historyEvents]);

  return events ? (
    <ContentWrapper>
      <EventsWrapper>
        {events.map(el => {
          return (
            <li key={el.text} year={el.year}>
              {el.text}
            </li>
          );
        })}
      </EventsWrapper>
    </ContentWrapper>
  ) : (
    <div>No history data available</div>
  );
}

export default React.memo(HistoryUI);
