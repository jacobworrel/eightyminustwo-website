import React from 'react';
import Link from 'gatsby-link';
import feather from '../../utils/feather';
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
        playsInline
        autoPlay
        muted
        loop
        poster={poster}
        className={styles.video}
      >
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>
    </div>
  </div>
);

const ChevronDown = () => (
  <a href="#films" className={styles.chevronDown}>
    {feather({ name: 'chevron-down', width: 75, height: 75 })}
  </a>
);

const Cover = () => (
  <div>
    <Logo />
    <ShowcaseReel />
    <ChevronDown />
  </div>
);

export default Cover;
