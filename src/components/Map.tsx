import { Map as GoogleMap, GoogleApiWrapper, Marker } from 'google-maps-react';

import React from 'react';

const coordinents = { lat: 33.3591010977438, lng: -97.1760019783657 };

export const Map = GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API,
})(({ google }) => (
  <GoogleMap
    google={google}
    zoom={18}
    style={{
      width: '90%',
      height: '90%',
    }}
    initialCenter={coordinents}
  >
    <Marker position={coordinents} />
  </GoogleMap>
));

export default Map;
