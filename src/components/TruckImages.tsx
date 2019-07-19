/* eslint-disable react/no-array-index-key */
import React from 'react';
import Img from 'gatsby-image';
import { Flex } from './Styled';

const TruckImages = ({ edges }: { edges: Query<ChildImageSharp> }) => (
  <Flex>
    {edges.map((edge, i) => (
      <Img key={i} fluid={edge.node.childImageSharp.fluid} />
    ))}
  </Flex>
);

export default TruckImages;
