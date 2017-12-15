import React from 'react';
import Link from 'gatsby-link';
import { Element } from 'react-scroll';

import styles from './FilmSection.module.css';
import whiteBoyStill2 from './assets/whiteboystill2.png';
import jesusLadyStill3 from './assets/jesusladystill3.png';
import baby1 from './assets/baby1.png';
import dogLover4 from './assets/dogloverstill4.jpg';
import singleDad1 from './assets/single-dad1.png';
import whiteboywide from './assets/whiteboy-wide2.png';

const Film = ({ title, src, layout }) => (
  <section className={`${layout} ${styles.column}`}>
    <img className={styles.img} src={src} alt={title} />
    <p className={styles.title}>{title}</p>
    <hr className={styles.hr} />
  </section>
);

const FilmSection = () => (
  <Element name="filmSection">
    <main id="films" className={styles.container}>
      <Film title="Dog Lover" src={dogLover4} layout={styles.twoColumn} />
      <Film title="Jesus Lady" src={jesusLadyStill3} layout={styles.twoColumn} />
      <Film
        title="Fuckin White Boy"
        src={whiteboywide}
        layout={styles.center}
      />
      <Film title="Baby" src={baby1} layout={styles.twoColumn} />
      <Film
        title="Single Dad"
        src={singleDad1}
        layout={styles.twoColumn}
      />
    </main>
  </Element>
);

export default FilmSection;
