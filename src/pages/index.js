import React from 'react';
import Link from 'gatsby-link';
import styles from './index.module.css';

import Cover from './../components/Cover/Cover';
import FilmSection from './../components/FilmSection/FilmSection';
import Footer from './../components/Footer/Footer';

const IndexPage = () => (
  <div>
    <Cover />
    <FilmSection />
    <Footer />
  </div>
);

export default IndexPage;
