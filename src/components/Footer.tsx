import React from 'react';
import SocialMedia from './SocialMediaIcons';
import styles from '../styles/components.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <SocialMedia />
        <div className={styles.copyright}>
          <small>
            &copy; 2017-2019 Cheat Day Cheesecakes, LLC. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
