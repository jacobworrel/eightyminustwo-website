import React from 'react';
import Link from 'gatsby-link';
import { animateScroll } from 'react-scroll';
import { Facebook, Instagram, Video, ChevronUp } from 'react-feather';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.container}>
    <a href="mailto:eightyminustwo@gmail.com" className={styles.contact}>
      eightyminustwo@gmail.com
    </a>
    <div className={styles.socialContainer}>
      <a className={styles.icon} href="https://www.instagram.com/80minus2/">
        <Instagram color="white" size={30} />
      </a>
      <a className={styles.icon} href="https://www.facebook.com/eightyminustwo">
        <Facebook color="white" size={30} />
      </a>
      <a className={styles.icon} href="https://vimeo.com/eightyminustwo">
        <Video color="white" size={30} />
      </a>
    </div>
    <div className={styles.iconContainer}>
      <ChevronUp
        className={styles.chevronUp}
        color="white"
        size={75}
        onClick={animateScroll.scrollToTop}
      />
    </div>
  </footer>
);

export default Footer;
