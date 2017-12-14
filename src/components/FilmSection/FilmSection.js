import React from 'react';
import Link from 'gatsby-link';
import feather from '../../utils/feather';
import styles from './FilmSection.module.css';

const FilmSection = () => (
  <main id="films" className={styles.container}>
    <section className={`${styles.filmSmall} ${styles.row}`}>JESUS LADY</section>
    <section className={`${styles.filmSmall} ${styles.row}`}>DOG LOVER</section>
    <section className={`${styles.filmLarge} ${styles.row}`}>WHITE BOY</section>
    <section className={`${styles.filmSmall} ${styles.row}`}>BABY</section>
    <section className={`${styles.filmSmall} ${styles.row}`}>SINGLE DAD</section>
  </main>
);

export default FilmSection;
