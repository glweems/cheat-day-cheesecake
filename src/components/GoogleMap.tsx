import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  faExternalLinkAlt,
  faWindowClose,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/components/map.module.scss';

import Button from './Button';

declare let process: {
  env: {
    GATSBY_GOOGLE_API: string;
  };
};

const Marker = ({ link }: { link: string }) => (
  <a href={link} target="_blank_">
    <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
  </a>
);

const GoogleMap = ({ toggleMap }: { toggleMap: React.FocusEventHandler }) => {
  const {
    facebook: {
      location: { latitude: lat, longitude: lng, street, city, state, zip },
    },
  } = useStaticQuery(graphql`
    query locationQuery {
      facebook {
        about
        location {
          latitude
          longitude
          street
          city
          state
          zip
        }
      }
    }
  `);

  const location = { lat, lng };
  const address = `${city}, ${state}, ${zip}`;
  const link = `https://maps.google.com/?ll=${lat},${lng}`;
  const key = process.env.GATSBY_GOOGLE_API;
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Button className={styles.close} onClick={toggleMap}>
        <FontAwesomeIcon icon={faWindowClose} size="2x" />
      </Button>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        defaultCenter={location}
        defaultZoom={16}
        options={{ disableDefaultUI: true }}
        style={{ height: '100vh' }}
      >
        <Marker {...location} link={link} />
      </GoogleMapReact>
      <footer className={styles.footer}>
        <div>
          <p>Cheat Day Cheesecakes</p>
          <address>
            {street}
            <br />
            {address}
          </address>
        </div>
        <div>
          <a href={link} target="_blank_">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GoogleMap;
