import React from 'react';
import styles from '../styles/components/events.module.scss';

interface EventsProps {
  events: QueryNode<CheesecakeEvent>[];
}

const Event = ({ title, date, address }: CheesecakeEvent) => (
  <div className={styles.event}>
    <div className={styles.info}>
      <h4 className={styles.title}>{title}</h4>
      <small>{`${address.city} ${address.street}`}</small>
    </div>

    <div className={styles.date}>{date}</div>
  </div>
);

const Events = ({ events }: EventsProps) => (
  <div className={styles.events}>
    {events.map(({ node }) => (
      <Event key={node.id} {...node} />
    ))}
  </div>
);

export default Events;
