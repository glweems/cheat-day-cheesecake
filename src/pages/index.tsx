import React from 'react';
import { graphql } from 'gatsby';
import { Container } from '../utils/theme';
import Events from '../components/Events';
import { Section } from '../components/Styled';

const IndexPage = ({
  data,
}: {
  data: { allCheesecakeEvent: Query<CheesecakeEvent> };
}) => {
  return (
    <div>
      <Section>
        <Container>
          <h1>Cheat Day Cheesecake</h1>
        </Container>
      </Section>
      <Section>
        <Events events={data.allCheesecakeEvent.edges} />
      </Section>
    </div>
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
