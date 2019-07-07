import React, { useState } from 'react';
import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';

const apiUrl =
  'https://nominatim.openstreetmap.org/search/?street=117%20E.%20Oak%20St.&country=united%20states&city=denton&format=json&state=texas&postalcode=76210';

declare let process: {
  env: {
    NODE_ENV: string;
    GOOGLE_API: string;
  };
};

export const MapContainer = GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API,
})(({ google }) => {
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('');
  axios.get(apiUrl).then(({ data }) => console.log(data));
  return (
    <GoogleMap
      google={google}
      zoom={14}
      initialCenter={{
        lat: -1.2884,
        lng: 36.8233,
      }}
    />
  );
});

export default MapContainer;
