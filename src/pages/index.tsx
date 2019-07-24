import React from 'react';
import { graphql } from 'gatsby';
import Microlink from '@microlink/react';
import Events from '../components/Events';
import TruckImageBanner from '../components/TruckImageBanner';
import CurrentMenu from '../components/CurrentMenu';
import FacebookPhotos from '../components/FacebookPhotos';
import { useIndexPageData } from '../utils/query';

const microlink =
  'https://www.ntdaily.com/cheat-day-cheesecakes-makes-it-easy-to-enjoy-a-sneaky-late-night-snack';

const IndexPage = () => {
  const { allCheesecakeEvent, allCheesecakeMenu, file } = useIndexPageData();

  return (
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
        <FacebookPhotos length={5} />
      </section>

      <section className="container">
        <Microlink url={microlink} />
      </section>
    </div>
  );
};

export default IndexPage;
