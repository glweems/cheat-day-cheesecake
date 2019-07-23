import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCompass } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/components.module.scss';

const Navbar = ({ toggleMenu, toggleMap }: any) => (
  <nav className={styles.navbar}>
    <button type="button" className="btn fas fa-bars" onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} />
    </button>

    <h1>Cheat Day Cheesecakes</h1>

    <button type="button" className="btn" onClick={toggleMap}>
      <FontAwesomeIcon icon={faCompass} />
    </button>
  </nav>
);

export default Navbar;
