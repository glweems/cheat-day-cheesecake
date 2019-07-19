import { push as AppMenu } from 'react-burger-menu';
import { Link } from 'gatsby';
import React from 'react';

interface SidebarProps {
  isOpen: [boolean, Function];
  navItems: NavItem[];
}

const Sidebar = ({ isOpen: [isOpen, setIsOpen], navItems }: SidebarProps) => (
  <AppMenu
    pageWrapId="page-wrap"
    outerContainerId="outer-container"
    isOpen={isOpen}
    customBurgerIcon={false}
    customCrossIcon={<button type="button" onClick={() => setIsOpen(false)} />}
  >
    {!navItems ||
      navItems.map(({ text, path }: NavItem) => (
        <Link key={path} to={path}>
          {text}
        </Link>
      ))}
  </AppMenu>
);

export default Sidebar;
