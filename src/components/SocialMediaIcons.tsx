import React from 'react';
import {
  faFacebook,
  faInstagram,
  faYelp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialMediaIconProps {
  size: string;
  marginRight?: string;
}

export const FacebookIcon: React.ReactNode = ({
  size,
  marginRight,
}: SocialMediaIconProps) => (
  <a
    href="https://facebook.com/cheatdaycheesecakes"
    target="_blank_"
    style={{ fontSize: size, marginRight }}
  >
    <FontAwesomeIcon icon={faFacebook} />
  </a>
);

export const InstramIcom: React.ReactNode = ({
  size,
  marginRight,
}: SocialMediaIconProps) => (
  <a
    href="https://instagram.com/cheatdaycheesecake"
    target="_blank_"
    style={{ fontSize: size, marginRight }}
  >
    <FontAwesomeIcon icon={faInstagram} />
  </a>
);

export const YelpIcon: React.ReactNode = ({
  size,
  marginRight,
}: SocialMediaIconProps) => (
  <a
    href=" https://m.yelp.com/biz/cheat-day-cheescakes-denton"
    target="_blank_"
    style={{ fontSize: size, marginRight }}
  >
    <FontAwesomeIcon icon={faYelp} />
  </a>
);

const icons: any = [FacebookIcon, InstramIcom, YelpIcon];

const SocialMediaIcons: React.ReactNode = ({
  size = '1.75rem',
  marginRight,
}: SocialMediaIconProps) =>
  icons.map((Icon: any) => <Icon size={size} marginRight={marginRight} />);

export default SocialMediaIcons;
