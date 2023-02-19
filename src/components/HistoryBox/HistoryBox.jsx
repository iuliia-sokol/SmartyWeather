// import { FadeInSection } from 'components/FadingList/FadingList';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from 'redux/location/locSelectors';
import {
  ContentWrapper,
  Date,
  Event,
  EventsWrapper,
} from './HistoryBox.styled';

function HistoryUI() {
  const historyEvents = useSelector(getHistory);
  const [events, setEvents] = useState(null);
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();

  console.log(events);

  useEffect(() => {
    if (historyEvents.events.length > 0) {
      setEvents(historyEvents.events);
      setDate(historyEvents.date);
    }
  }, [dispatch, historyEvents]);

  return events ? (
    <ContentWrapper>
      <EventsWrapper>
        <Date>{date}</Date>
        {events.map(el => {
          return (
            // <FadeInSection key={el.description}>
            <Event key={el.description}>
              <span>{el.year}</span> {el.description}
            </Event>
            // </FadeInSection>
          );
        })}
      </EventsWrapper>
    </ContentWrapper>
  ) : (
    <div>No history data available</div>
  );
}

export default React.memo(HistoryUI);
