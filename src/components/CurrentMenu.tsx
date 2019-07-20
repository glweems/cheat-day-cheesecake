import React from 'react';

interface MenuProps {
  menuItems: MenuItem[];
}

const CurrentMenu = ({ menuItems }: MenuProps) => (
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

export default CurrentMenu;
