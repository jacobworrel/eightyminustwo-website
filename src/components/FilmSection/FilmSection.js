import React from 'react';
import { Element } from 'react-scroll';
import { X } from 'react-feather';

import ReactModal from 'react-modal';

import styles from './FilmSection.module.css';
import jesusLadyStill from './assets/jesusladystill3.png';
import babyStill from './assets/baby1.png';
import dogLoverStill from './assets/dogloverstill4.jpg';
import singleDadStill from './assets/single-dad1.png';
import whiteBoyStill from './assets/whiteboy-wide2.png';

// override default modal styles
ReactModal.defaultStyles = {
  ...ReactModal.defaultStyles,
  overlay: {
    ...ReactModal.defaultStyles.overlay,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  content: {
    ...ReactModal.defaultStyles.content,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    border: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const Film = ({
  title,
  director,
  cast,
  screenshot,
  layout,
  vimeoLink,
  handleOpenModal,
  handleCloseModal,
  showModal
}) => (
  <section
    className={`${layout} ${styles.column}`}
    onClick={() => handleOpenModal(vimeoLink)}
  >
    <div className={styles.overlay}>
      <div className={styles.director}>
        <h4 className={styles.credit}>Directed by:</h4>
        <p className={styles.name}>{director}</p>
      </div>
      <div className={styles.cast}>
        <h4 className={styles.credit}>Starring:</h4>
        <p className={styles.name}>{cast}</p>
      </div>
    </div>
    <img className={styles.img} src={screenshot} alt={title} />
    <p className={styles.title}>{title}</p>
    <hr className={styles.hr} />
  </section>
);

class FilmSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedVideo: '',
      films: [
        {
          title: 'Dog Lover',
          director: 'Frederic Da',
          cast: 'Sean Bolger',
          screenshot: dogLoverStill,
          layout: styles.twoColumn,
          vimeoLink: ''
        },
        {
          title: 'Jesus Lady',
          director: 'Frederic Da',
          cast: 'Melissa Knox, Dylan Taylor, Schuyler Jeffress',
          screenshot: jesusLadyStill,
          layout: styles.twoColumn,
          vimeoLink: ''
        },
        {
          title: 'Fuckin White Boy',
          director: 'Frederic Da',
          cast: 'Ben Narich, Tracy Wilson, Chad Davis',
          screenshot: whiteBoyStill,
          layout: styles.center,
          vimeoLink:
            'https://player.vimeo.com/video/163305444?color=ffffff&title=0&byline=0&portrait=0'
        },
        {
          title: 'Baby',
          director: 'Roxane Mesquida',
          cast: 'Roxane Mesquida, Frederic Da',
          screenshot: babyStill,
          layout: styles.twoColumn,
          vimeoLink: ''
        },
        {
          title: 'Single Dad',
          director: 'Frederic Da',
          cast: 'Sean Bolger',
          screenshot: singleDadStill,
          layout: styles.twoColumn,
          vimeoLink: ''
        }
      ]
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(vimeoLink) {
    if (vimeoLink) {
      this.setState({ showModal: true, selectedVideo: vimeoLink });
    }
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const films = this.state.films.map(film => (
      <Film
        key={film.title}
        title={film.title}
        director={film.director}
        cast={film.cast}
        screenshot={film.screenshot}
        layout={film.layout}
        vimeoLink={film.vimeoLink}
        handleOpenModal={this.handleOpenModal}
        handleCloseModal={this.handleCloseModal}
        showModal={this.state.showModal}
      />
    ));
    return (
      <Element name="filmSection">
        <main id="films" className={styles.container}>
          {films}
          <ReactModal isOpen={this.state.showModal}>
            <iframe
              src={this.state.selectedVideo}
              width="640"
              height="360"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozAllowfullscreen="true"
              allowFullScreen="true"
            />
            <X onClick={this.handleCloseModal} />
          </ReactModal>
        </main>
      </Element>
    );
  }
}

export default FilmSection;
