/* eslint-disable react/prop-types */
import React from 'react';

interface MenuProps {
  menuItems: MenuItem[];
}

export const Menu = ({ menuItems }: MenuProps) => (
  <ul>
    {menuItems.map(({ name, flavors }) => (
      <li key={name}>
        {name}
        <ul>
          {flavors.map(flavor => (
            <li key={flavor}>{flavor}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);

export default Menu;
