import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
// import GoogleMap from '../components/Map';
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

const IndexPage = ({
  data,
}: {
  data: { allCheesecakeEvent: Query<CheesecakeEvent> };
}) => {
  return (
    <>
      <Section>
        <Container>
          <h1>Cheat Day Cheesecake</h1>
        </Container>
      </Section>

      <Section>
        <Events events={data.allCheesecakeEvent.edges} />
      </Section>
    </>
  );
};

export const IndexQuery = graphql`
  query EventsQuery {
    allCheesecakeEvent {
      edges {
        node {
          title
          date
          address {
            city
            state
            street
            zip
          }
        }
      }
    }
  }
`;

export default IndexPage;

/*
<GoogleMap
  coorinents={{ lat: 33.3591010977438, lng: -97.1760019783657 }}
  mapStyle={mapStyle}
/>
*/
