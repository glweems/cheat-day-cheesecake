/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import Microlink from '@microlink/react';
import { useStaticQuery, graphql } from 'gatsby';
import { Fade } from 'react-reveal';
import Events from '../components/Events';
import TruckImageBanner from '../components/TruckImageBanner';
import CurrentMenu from '../components/CurrentMenu';
import FacebookPhotos from '../components/FacebookPhotos';
import Hours from '../components/Hours';
import About from '../components/About';

const IndexPage = () => {
  const { allCheesecakeMenu, allCheesecakeEvent, file } = useIndexPageData();

  return (
    <div>
      <div>
        <TruckImageBanner fluid={file.childImageSharp.fluid} />
      </div>

      <section className="container">
        <About />
      </section>

      <Fade right>
        <section className="container-fluid bg-red">
          <Fade left>
            <div className="container padded">
              <h2>Current Menu</h2>
              <CurrentMenu menuItems={allCheesecakeMenu.edges} />
            </div>
          </Fade>
        </section>
      </Fade>

      <Fade>
        <section className="container">
          <Hours />
        </section>
      </Fade>

      <section className="container padded">
        <Fade>
          <h2>Upcomming Events</h2>
          <Events events={allCheesecakeEvent.edges} />
        </Fade>
      </section>

      <Fade>
        <section>
          <FacebookPhotos />
        </section>
      </Fade>

      <Fade>
        <section className="container padded">
          <Microlink
            url="https://www.ntdaily.com/cheat-day-cheesecakes-makes-it-easy-to-enjoy-a-sneaky-late-night-snack"
            size="large"
            style={{ margin: 'auto' }}
          />
        </section>
      </Fade>
    </div>
  );
};

export default IndexPage;

// ! INDEX PAGE QUERY
const useIndexPageData = () => {
  const data = useStaticQuery(graphql`
    query IndexPageData {
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
  `);
  return data;
};
