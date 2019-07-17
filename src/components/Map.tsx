/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

interface MapProps {
  google: typeof GoogleApiWrapper;
  mapStyle: any;
  coorinents: {
    lat: number;
    lng: number;
  };
}

function GoogleMap({ google, coorinents, mapStyle }: MapProps) {
  return (
    <Map
      xs={12}
      draggable={false}
      google={google}
      zoom={15}
      style={mapStyle}
      initialCenter={coorinents}
    >
      <Marker position={coorinents} />
    </Map>
  );
}

export default GoogleApiWrapper({ apiKey: process.env.GATSBY_GOOGLE_API })(
  GoogleMap,
);
