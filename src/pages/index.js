import React from 'react';
import Link from 'gatsby-link';
import styles from './index.module.css';
import cloudImg from './assets/Cloud_Surf.jpg';
import cloudMp4 from './assets/Cloud_Surf.mp4';
import cloudWebm from './assets/Cloud_Surf.webm';
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
        poster={cloudImg}
        className={styles.video}
      >
        <source src={cloudWebm} type="video/webm" />
        <source src={cloudMp4} type="video/mp4" />
      </video>
    </div>
  </div>
);

const IndexPage = () => (
  <div>
    <Logo />
    <ShowcaseReel />
  </div>
);

export default IndexPage;
