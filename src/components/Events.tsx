import React from 'react';

const Events = ({ events }: { events: Event[] }) => {
  return (
    <div>
      <h3>Upcoming Events</h3>
      {events.map(event => (
        <div>{event.title}</div>
      ))}
    </div>
  );
};

export default Events;
