import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SocialMediaIcons from './SocialMediaIcons';

const About = () => {
  const {
    facebook: { about },
  } = useStaticQuery(graphql`
    query about {
      facebook {
        about
      }
    }
  `);

  return (
    <div>
      <div className="flex padded">
        <SocialMediaIcons noText size="2x" />
      </div>
      <p>{about}</p>
    </div>
  );
};

export default About;
