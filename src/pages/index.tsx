import React from 'react';
import Microlink from '@microlink/react';
import styled from 'styled-components';
import { Container } from '../utils/theme';
import { SocialIcons } from '../components/SocialIcons';
import { Menu } from '../components/Menu';
import GoogleMap from '../components/Map';

const menuItems: MenuItem[] = [
  { name: 'Cheese Cake', flavors: ['Lemon Blueberry', 'Chocolate Chip'] },
  { name: 'Creme Brulee', flavors: ['Original', 'Coffee', 'Spicy'] },
];

const Grid = styled.div`
  display: grid;
  /* grid-template-rows: 50vh; */
  grid-template-columns: 1fr 1fr;
  /* gap: 1rem; */
  max-width: 100vw;
  max-height: 100vh;
`;

export default function IndexPage() {
  return (
    <div>
      <h1>Hello World!</h1>
      <GoogleMap
        mapStyle={{
          width: '95%',
          margin: '0 auto',
          height: '10rem',
          border: '2px solid black',
          borderRadius: '10px',
          position: 'relative',
        }}
      />
    </div>
  );
}
