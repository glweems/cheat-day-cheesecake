import React from 'react';
import { Flex } from './Styled';

const Navbar = ({ toggleMenu }: { toggleMenu: any }) => (
  <Flex className="navbar" justifyContent="space-between" alignItems="center">
    <button type="button" onClick={toggleMenu}>
      <i className="fas fa-bars" />
    </button>

    <h3>Cheat Day Cheesecake</h3>
    <div>Find me</div>
  </Flex>
);

export default Navbar;
