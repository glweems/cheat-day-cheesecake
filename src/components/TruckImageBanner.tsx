import React from 'react';
import Img from 'gatsby-image';

const TruckImageBanner = ({ fluid }: any) => (
  <Img fluid={fluid} style={{ maxHeight: '15em' }} />
);

export default TruckImageBanner;
