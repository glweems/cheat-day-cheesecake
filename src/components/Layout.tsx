import React, { ReactNode } from 'react';
import { bubble as Sidebar } from 'react-burger-menu';
import { Link } from 'gatsby';

export default ({
  children,
  navItems,
}: {
  children: ReactNode;
  navItems: NavItem[];
}) => (
  <div id="outer-container">
    <Sidebar pageWrapId="page-wrap" outerContainerId="outer-container">
      {!navItems ||
        navItems.map(({ text, path }: NavItem) => (
          <Link key={path} to={path}>
            {text}
          </Link>
        ))}
    </Sidebar>
    <main id="page-wrap">{children}</main>
  </div>
);
