import React from 'react';
import { graphql } from 'gatsby';
import Microlink from '@microlink/react';
import Events from '../components/Events';
import TruckImageBanner from '../components/TruckImageBanner';
import CurrentMenu from '../components/CurrentMenu';
import FacebookPhotos from '../components/FacebookPhotos';

const microlink =
  'https://www.ntdaily.com/cheat-day-cheesecakes-makes-it-easy-to-enjoy-a-sneaky-late-night-snack';

const IndexPage = ({
  data: { allCheesecakeMenu, allCheesecakeEvent, file },
}: IndexPageProps) => (
  <div>
    <div>
      <TruckImageBanner fluid={file.childImageSharp.fluid} />
    </div>

    <section className="container-fluid">
      <div className="container padded">
        <h2>Current Menu</h2>
        <CurrentMenu menuItems={allCheesecakeMenu.edges} />
      </div>
    </section>

    <section className="container padded">
      <h2>Upcomming Events</h2>
      <Events events={allCheesecakeEvent.edges} />
    </section>

    <section>
      <FacebookPhotos />
    </section>

    <section className="container">
      <Microlink url={microlink} />
    </section>
  </div>
);

export const IndexQuery = graphql`
  query EventsQuery {
    # Cheesecake Menu
    allCheesecakeMenu {
      edges {
        node {
          id
          item
          flavors {
            color
            flavor
          }
        }
      }
    }
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
      id
      childImageSharp {
        fluid(jpegProgressive: true, fit: COVER, trim: 1.5) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
    # End
  }
`;
export default IndexPage;
