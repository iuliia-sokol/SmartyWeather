import { FadeInSection } from 'components/FadingList/FadingList';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDate, getHistory } from 'redux/location/locSelectors';
import {
  ContentWrapper,
  Date,
  Event,
  EventsWrapper,
} from './HistoryBox.styled';

function HistoryUI() {
  const historyEvents = useSelector(getHistory);
  const date = useSelector(getDate);
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
        <Date>{date}</Date>
        {events.map(el => {
          return (
            <FadeInSection key={el.description}>
              <Event>
                <span>{el.year}</span> {el.description}
              </Event>
            </FadeInSection>
          );
        })}
      </EventsWrapper>
    </ContentWrapper>
  ) : (
    <div>No history data available</div>
  );
}

export default React.memo(HistoryUI);
