import React from 'react';
import Link from 'gatsby-link';
import feather from '../utils/feather';
import styles from './index.module.css';

import Cover from './../components/Cover/Cover';
import FilmSection from './../components/FilmSection/FilmSection';

const IndexPage = () => (
  <div>
    <Cover />
    <FilmSection />
  </div>
);

export default IndexPage;
