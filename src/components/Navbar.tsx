import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCompass } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ toggleMenu }: { toggleMenu: any }) => (
  <nav className="navbar">
    <button type="button" className="btn fas fa-bars" onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} />
    </button>

    <h2>Cheat Day Cheesecakes</h2>

    <button type="button" className="btn">
      <FontAwesomeIcon icon={faCompass} />
    </button>
  </nav>
);

export default Navbar;
