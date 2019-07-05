import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.35rem 0.5rem;
  background: ${({ theme }) => theme.colors.red};
  .brand {
    font-weight: bold;
  }
`;

const links = [{ title: 'Home', path: '/' }];

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/" className="brand">
        Cheat Day Cheesecake
      </Link>
      {links.map(({ title, path }) => (
        <Link key={title} to={path}>
          {title}
        </Link>
      ))}
    </StyledNavbar>
  );
};

export default Navbar;
