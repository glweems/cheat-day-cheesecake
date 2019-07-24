import React from 'react';
import { useCompanyHours } from '../utils/query';
import styles from '../styles/components/hours.module.scss';

interface HourObj {
  id: number;
  day: string;
  open: string | null;
  close: string | null;
  hours: string | null;
}

const Hours = () => (
  <ul>
    {useCompanyHours().map(({ id, day, hours }: HourObj) =>
      hours ? (
        <li key={id} className={styles.hour}>
          <h4>{day}</h4>
          <small>{hours}</small>
        </li>
      ) : null,
    )}
  </ul>
);

export default Hours;
