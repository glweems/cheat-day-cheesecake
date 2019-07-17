import React from 'react';

const Event = ({
  values: { title, date, address },
}: {
  values: CheesecakeEvent;
}) => (
  <li>
    <span>{title}</span>
    <br />
    <span>{date}</span>
  </li>
);

export default ({ events }: { events: QueryNode<CheesecakeEvent>[] }) => {
  return (
    <div>
      <h3>Upcoming Events</h3>
      {events.map(event => (
        <Event key={event.node.id} values={event.node} />
      ))}
    </div>
  );
};
