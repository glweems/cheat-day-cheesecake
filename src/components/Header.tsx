/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { Parallax } from 'react-parallax';

const TruckImage = require('../images/truck-main.jpg');

const Header = () => (
  <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={TruckImage}
    bgImageAlt="the dog"
    strength={-200}
  >
    <div style={{ height: '30vh' }} />
  </Parallax>
);

export default Header;
