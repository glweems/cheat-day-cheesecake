import React, { createContext, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const LayoutContext = createContext();

const Layout = ({
  children,
  navItems,
}: {
  children: React.ReactNode;
  navItems: NavItem[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <LayoutContext.Provider isOpen={[isOpen, setIsOpen]}>
      <Navbar isOpen={[isOpen, setIsOpen]} />
      <Sidebar isOpen={[isOpen, setIsOpen]} navItems={navItems} />
      <div id="outer-container">
        <main id="page-wrap">{children}</main>
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;
