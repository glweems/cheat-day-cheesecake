import React from 'react';
import styles from '../styles/components.module.scss';

interface CurrentMenuProps {
  menuItems: QueryNode<CheesecakeMenu>[];
}

const Flavor = ({ flavor, color }: CheesecakeFlavor) => (
  <div className={styles.flavor}>
    <div>{flavor}</div>
    <div className={styles.swatch} style={{ background: color }} />
  </div>
);

const MenuItem = ({ item, flavors }: CheesecakeMenu) => (
  <div className={styles.menuItem}>
    <h4>{item}</h4>
    <div>
      {flavors.map(({ flavor, color }: CheesecakeFlavor) => (
        <Flavor key={flavor} flavor={flavor} color={color} />
      ))}
    </div>
  </div>
);

const CurrentMenu = ({ menuItems }: CurrentMenuProps) => (
  <div>
    {menuItems.map(({ node: { item, flavors } }) => (
      <MenuItem key={item} item={item} flavors={flavors} />
    ))}
  </div>
);

export default CurrentMenu;
