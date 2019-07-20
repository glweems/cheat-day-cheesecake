import React from 'react';
import { graphql } from 'gatsby';
import Microlink from '@microlink/react';
import Events from '../components/Events';
import Header from '../components/Header';
import CurrentMenu from '../components/CurrentMenu';

const menuItems: MenuItem[] = [
  { name: 'Cheese Cake', flavors: ['Lemon Blueberry', 'Chocolate Chip'] },
  { name: 'Creme Brulee', flavors: ['Original', 'Coffee', 'Spicy'] },
];

const IndexPage = ({ data: { allFile, allCheesecakeEvent } }: RootObject) => (
  <>
    <Header />
    <section className="container-fluid bg-red">
      <div className="container">
        <h2>Current Menu</h2>
        <CurrentMenu menuItems={menuItems} />
      </div>
    </section>
    <section className="container">
      <h2>Upcomming Events</h2>
      <Events events={allCheesecakeEvent.edges} />
    </section>
    <section className="container">
      <Microlink
        className="microlink"
        url="https://www.ntdaily.com/cheat-day-cheesecakes-makes-it-easy-to-enjoy-a-sneaky-late-night-snack"
        size="large"
        style={{ margin: 'auto' }}
      />
    </section>
  </>
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
