import React from 'react';
import Microlink from '@microlink/react';
import { Container } from '../utils/theme';
import Layout from '../components/Layout';
import { SocialIcons } from '../components/SocialIcons';
import { Menu } from '../components/Menu';
import { Map } from '../components/Map';

const menuItems: MenuItem[] = [
  { name: 'Cheese Cake', flavors: ['Lemon Blueberry', 'Chocolate Chip'] },
  { name: 'Creme Brulee', flavors: ['Original', 'Coffee', 'Spicy'] },
];

export default function IndexPage() {
  return (
    <Layout>
      <Container>
        <h1>Hello World!</h1>
        <p>Gatsby is the best!</p>
        <SocialIcons />
      </Container>
      <Container>
        <Menu menuItems={menuItems} />
      </Container>
      <Container>
        <Microlink url="https://www.ntdaily.com/cheat-day-cheesecakes-makes-it-easy-to-enjoy-a-sneaky-late-night-snack/" />
      </Container>
      <Map />
    </Layout>
  );
}
