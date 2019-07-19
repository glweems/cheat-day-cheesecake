import { push as AppMenu } from 'react-burger-menu';
import { Link } from 'gatsby';
import React from 'react';

interface SidebarProps {
  isOpen?: boolean;
  navItems: NavItem[];
}

const Sidebar = ({ isOpen, navItems }: SidebarProps) => (
  <AppMenu
    pageWrapId="page-wrap"
    outerContainerId="outer-container"
    isOpen={isOpen}
    customBurgerIcon={false}
    customCrossIcon={false}
    noOverlay
  >
    <NavItems navItems={navItems} />
  </AppMenu>
);

const NavItems = ({ navItems }: SidebarProps) => (
  <>
    {navItems.map(({ text, path }: NavItem) => (
      <Link key={path} to={path}>
        {text}
      </Link>
    ))}
    ;
  </>
);

export default Sidebar;
