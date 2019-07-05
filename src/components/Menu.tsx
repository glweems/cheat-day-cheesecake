/* eslint-disable react/prop-types */
import React from 'react';

interface MenuProps {
  menuItems: MenuItem[];
}

export const Menu = ({ menuItems }: MenuProps) => (
  <ul>
    {menuItems.map(({ name, flavors }) => (
      <li>
        {name}
        <ul>
          {flavors.map(flavor => (
            <li>{flavor}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);

export default Menu;
