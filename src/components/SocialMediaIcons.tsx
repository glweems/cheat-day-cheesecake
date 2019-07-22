/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import data from '../utils/data';

interface LinkData {
  name: string;
  link: string;
  Icon: IconDefinition;
}

interface SocialMediaIconsProps extends LinkData {
  fontSize?: string;
  marginRight?: string;
  items?: LinkData[];
  noIcon?: boolean;
  noText?: boolean;
}

const SocialMediaIcon: any = ({
  name,
  link,
  Icon,
  fontSize,
  marginRight,
  noText,
  noIcon,
}: SocialMediaIconsProps) => (
  <div style={{ fontSize, marginRight }}>
    <a href={link} target="_blank_">
      {noIcon ? null : (
        <FontAwesomeIcon icon={Icon} style={{ marginRight: '0.75em' }} />
      )}
      {noText ? null : name}
    </a>
  </div>
);

const SocialMediaIcons: any = ({
  fontSize = '1em',
  marginRight = '0.5em',
  items = data,
  noText,
  noIcon,
}: SocialMediaIconsProps) =>
  items.map((item: LinkData) => (
    <SocialMediaIcon
      key={item.name}
      {...item}
      noIcon={noIcon}
      noText={noText}
      fontSize={fontSize}
      marginRight={marginRight}
    />
  ));

export default SocialMediaIcons;
