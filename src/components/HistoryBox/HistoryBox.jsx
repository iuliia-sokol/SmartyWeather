import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from 'redux/location/locSelectors';
import { ContentWrapper, Event, EventsWrapper } from './HistoryBox.styled';

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
            <Event key={el.description} year={el.year}>
              <span>{el.year}</span> {el.description}
            </Event>
          );
        })}
      </EventsWrapper>
    </ContentWrapper>
  ) : (
    <div>No history data available</div>
  );
}

export default React.memo(HistoryUI);
