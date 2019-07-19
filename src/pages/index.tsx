import React from 'react';
import { graphql } from 'gatsby';
import { Container } from '../utils/theme';
import Events from '../components/Events';
import { Section } from '../components/Styled';
import TruckImages from '../components/TruckImages';
import Header from '../components/Header';

const IndexPage = ({ data: { allFile, allCheesecakeEvent } }: RootObject) => (
  <div>
    <Header />
    <Section>
      <Container>
        <h1>Cheat Day Cheesecake</h1>
      </Container>
    </Section>
    <TruckImages edges={allFile.edges} />
    <Section>
      <Events events={allCheesecakeEvent.edges} />
    </Section>
  </div>
);

export const IndexQuery = graphql`
  query EventsQuery {
    # CHEESECAKE EVENTS
    allCheesecakeEvent {
      edges {
        node {
          id
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
    # TRUCK IMAGES
    file(name: { regex: "/truck-main/" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    allFile(filter: { absolutePath: { regex: "/images/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`;
export default IndexPage;
