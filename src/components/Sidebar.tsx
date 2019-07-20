import { push as AppMenu } from 'react-burger-menu';
import { Link } from 'gatsby';
import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

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
    {navItems.map(({ text, path }: NavItem) => (
      <Link key={path} to={path}>
        {text}
      </Link>
    ))}
    <SocialMediaIcons size="2rem" marginRight="2.5rem" />
  </AppMenu>
);

export default Sidebar;
