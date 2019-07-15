/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Map, { GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { relative } from 'path';

// import '@types/google-maps-react';

const coordinents = { lat: 33.3591010977438, lng: -97.1760019783657 };

interface MapProps {
  google: any;
}

export default GoogleApiWrapper({ apiKey: process.env.GOOGLE_API })(props => {
  const [infoVisable, setInfoVisable] = useState(true);
  const [activeMarker, setActiveMarker] = useState({
    selectedPlace: coordinents,
  });
  return (
    <Map
      draggable={false}
      xs={12}
      google={props.google}
      zoom={15}
      style={props.mapStyle}
      initialCenter={coordinents}
    >
      <Marker
        position={coordinents}
        onClick={(props, marker, e) => console.log(props, marker, e)}
      >
        <InfoWindow marker={coordinents} visible={infoVisable}>
          <div>hello</div>
        </InfoWindow>
      </Marker>
    </Map>
  );
});
