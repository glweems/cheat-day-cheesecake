import React, { createContext, useState } from 'react';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import GoogleMap from './GoogleMap';

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
  const [isMapOpen, setIsMapOpen] = useState(false);
  const toggleMap = () => setIsMapOpen(!isMapOpen);
  return (
    <LayoutContext.Provider isOpen={[isOpen, setIsOpen]}>
      <Sidebar isOpen={isOpen} navItems={navItems} />
      {!isMapOpen ? (
        <div id="outer-container">
          <main id="page-wrap">
            <Navbar toggleMenu={toggleMenu} toggleMap={toggleMap} />
            {children}
          </main>
          <Footer />
        </div>
      ) : (
        <GoogleMap toggleMap={toggleMap} />
      )}
    </LayoutContext.Provider>
  );
};

export default Layout;
