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
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <LayoutContext.Provider isOpen={[isOpen, setIsOpen]}>
      <Sidebar isOpen={isOpen} navItems={navItems} />
      <div id="outer-container">
        <main id="page-wrap">
          <Navbar toggleMenu={toggleMenu} />

          {children}
        </main>
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;
