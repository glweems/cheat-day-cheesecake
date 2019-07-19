import React from 'react';
import { Flex } from './Styled';

const Navbar = ({ toggleMenu }: { toggleMenu: any }) => (
  <Flex className="navbar" justifyContent="space-between" alignItems="center">
    <button type="button" className="btn fas fa-bars" onClick={toggleMenu} />

    <h3>Cheat Day Cheesecake</h3>

    <div>Find me</div>
  </Flex>
);

export default Navbar;
