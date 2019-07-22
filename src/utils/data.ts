import {
  faFacebook,
  faInstagram,
  faYelp,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

interface IconData {
  name: string;
  link: string;
  Icon: IconDefinition;
}

export const socialMediaIcons: IconData[] = [
  {
    name: 'Facebook',
    link: 'https://facebook.com/cheatdaycheesecakes',
    Icon: faFacebook,
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/cheatdaycheesecake',
    Icon: faInstagram,
  },
  {
    name: 'Yelp',
    link: 'https://yelp.com/biz/cheat-day-cheescakes-denton',
    Icon: faYelp,
  },
];

export default socialMediaIcons;
