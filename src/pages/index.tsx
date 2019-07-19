import React from 'react';
import { graphql } from 'gatsby';
import Events from '../components/Events';
import { Section } from '../components/Styled';
import TruckImages from '../components/TruckImages';
import Header from '../components/Header';

const IndexPage = ({ data: { allFile, allCheesecakeEvent } }: RootObject) => (
  <div className="index-page">
    <Header />
    <TruckImages edges={allFile.edges} />
    <Section style={{ padding: '1rem' }}>
      <Events events={allCheesecakeEvent.edges} />
    </Section>
  </div>
);

export const IndexQuery = graphql`
  query EventsQuery {
    # CheeseCake Events
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
    # Main Truck Image
    file(name: { regex: "/truck-main/" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    # All Truck Images
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
