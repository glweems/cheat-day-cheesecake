import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import data from '../utils/data';

interface LinkData {
  name: string;
  link: string;
  Icon: IconDefinition;
  size?:
    | '1x'
    | 'xs'
    | 'lg'
    | 'sm'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
    | undefined;
}

interface SocialMediaIconsProps extends LinkData {
  fontSize?: string;
  marginRight?: string;
  items?: LinkData[];
  noIcon?: boolean;
  noText?: boolean;
  size?:
    | '1x'
    | 'xs'
    | 'lg'
    | 'sm'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
    | undefined;
}

const SocialMediaIcon = ({
  name,
  link,
  Icon,
  fontSize,
  marginRight,
  noText,
  noIcon,
  size,
}: SocialMediaIconsProps) => (
  <div style={{ fontSize, marginRight }}>
    <a href={link} target="_blank_">
      {noIcon ? null : (
        <FontAwesomeIcon
          icon={Icon}
          style={{ marginRight: '0.75em' }}
          size={size}
        />
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
  size,
}: SocialMediaIconsProps) =>
  items.map((item: LinkData) => (
    <SocialMediaIcon
      key={item.name}
      {...item}
      size={size}
      noIcon={noIcon}
      noText={noText}
      fontSize={fontSize}
      marginRight={marginRight}
    />
  ));

export default SocialMediaIcons;
