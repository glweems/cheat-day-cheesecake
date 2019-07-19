import React from 'react';
import { Flex } from './Styled';

const Navbar = ({
  isOpen: [isOpen, setIsOpen],
}: {
  isOpen: [boolean, Function];
}) => {
  return (
    <Flex justifyContent="space-between">
      <div>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          click
        </button>
      </div>
      <div>Cheat Day Cheesecake</div>
      <div>Find me</div>
    </Flex>
  );
};

export default Navbar;
