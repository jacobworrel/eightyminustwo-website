import React from 'react';
import Link from 'gatsby-link';
import { ChevronDown } from 'react-feather';
import { scroller } from 'react-scroll';

import styles from './cover.module.css';
import poster from './assets/Cloud_Surf.jpg';
import mp4 from './assets/Cloud_Surf.mp4';
import webm from './assets/Cloud_Surf.webm';
import logo from './assets/eightyminustwo-logo.png';

const Logo = () => (
  <Link to="/" className={styles.logo}>
    <img src={logo} alt="Eighty Minus Two Logo" />
  </Link>
);

const ShowcaseReel = () => (
  <div className={styles.wrapper}>
    <div className={styles.featured}>
      <video
        poster={poster}
        className={styles.video}
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>
    </div>
  </div>
);

const Cover = () => (
  <div>
    <Logo />
    <ShowcaseReel />
    <ChevronDown
      className={styles.chevronDown}
      color="black"
      size={75}
      onClick={() =>
        scroller.scrollTo('filmSection', {
          duration: 1500,
          delay: 100,
          smooth: true
        })
      }
    />
  </div>
);

export default Cover;
