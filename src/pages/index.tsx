import React from 'react';
import styled from 'styled-components';
import GoogleMap from '../components/Map';
import { Container } from '../utils/theme';
import Events from '../components/Events';

const Section = styled.section`
  width: 100%;
  padding: 2rem 0;
  background: ${props => props.theme.colors.red};
`;

const mapStyle = {
  width: '100%',
  margin: '0 auto',
  height: '10rem',
  border: '4px solid white',
  position: 'static',
};

const events: CheeseEvent[] = [
  {
    title: 'Smashing',
    date: 'now',
    address: {
      street: '3616 Clydesdale Dr.',
      city: 'Deton',
      state: 'TX',
      zip: 76210,
    },
  },
  {
    title: 'Smashing',
    date: 'now',
    address: {
      street: '3616 Clydesdale Dr.',
      city: 'Deton',
      state: 'TX',
      zip: 76210,
    },
  },
];

export default function IndexPage() {
  return (
    <>
      <Section>
        <Container>
          <h1>Cheat Day Cheesecake</h1>
        </Container>
      </Section>
      {/* <GoogleMap
          coorinents={{ lat: 33.3591010977438, lng: -97.1760019783657 }}
          mapStyle={mapStyle}
        /> */}
      <Section>
        <Events events={events} />
      </Section>
    </>
  );
}
