import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  background: ${({ theme }) => theme.colors.red};
`;

const links = [{ title: 'Home', path: '/' }];

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      {links.map(({ title, path }) => (
        <Link key={title} to={path}>
          {title}
        </Link>
      ))}
    </StyledNavbar>
  );
};

export default Navbar;
