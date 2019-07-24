import React from 'react';
import Microlink from '@microlink/react';
import Events from '../components/Events';
import TruckImageBanner from '../components/TruckImageBanner';
import CurrentMenu from '../components/CurrentMenu';
import FacebookPhotos from '../components/FacebookPhotos';
import { useIndexPageData } from '../utils/query';
import Hours from '../components/Hours';

const IndexPage = () => {
  const { allCheesecakeMenu, allCheesecakeEvent, file } = useIndexPageData();

  return (
    <>
      <div>
        <TruckImageBanner fluid={file.childImageSharp.fluid} />
      </div>
      <section>
        <Hours />
      </section>
      <section className="container-fluid bg-red">
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

      <section className="container padded">
        <Microlink
          url="https://www.ntdaily.com/cheat-day-cheesecakes-makes-it-easy-to-enjoy-a-sneaky-late-night-snack"
          size="large"
          style={{ margin: 'auto' }}
        />
      </section>
    </>
  );
};

export default IndexPage;
