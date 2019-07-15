import React from 'react';
import GoogleMap from '../components/Map';

export default function IndexPage() {
  return (
    <div>
      <h1>Hello World!</h1>
      <GoogleMap
        coorinents={{ lat: 33.3591010977438, lng: -97.1760019783657 }}
        mapStyle={{
          width: '95%',
          margin: '0 auto',
          height: '10rem',
          border: '2px solid black',
          borderRadius: '10px',
          position: 'relative',
        }}
      />
    </div>
  );
}
