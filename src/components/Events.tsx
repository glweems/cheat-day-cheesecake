import React from 'react';
import styles from '../styles/components.module.scss';

const Events = ({ events }: any) => (
  <div className={styles.events}>
    {events.map(({ node: { title, date, address } }: any) => (
      <div className={styles.event}>
        <div className={styles.info}>
          <h4 className={styles.title}>{title}</h4>
          <small>{`${address.city} ${address.street}`}</small>
        </div>

        <div className={styles.date}>{date}</div>
      </div>
    ))}
  </div>
);

export default Events;
