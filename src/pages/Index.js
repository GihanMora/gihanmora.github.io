import React from 'react';
import { Link } from 'react-router-dom';
import { Gallery } from "react-grid-gallery";
import Main from '../layouts/Main';
import PhotoAlbum from "react-photo-album";
import { ReactPhotoCollage } from "react-photo-collage";
const setting = {
  width: '100%',
  height: ['500px', '340px','350px','350px','350px','350px','400px'],
  layout: [1, 2, 1, 2, 1, 2],
  photos: [

    { source: 'images/grid/group2.jpg' },
    { source: 'images/grid/couple.jpg' },
    { source: 'images/grid/ltu.jpg' },
    { source: 'images/grid/sg.jpg' },
    { source: 'images/grid/snow.jpeg' },
    { source: 'images/grid/snow2.jpg' },
    { source: 'images/grid/group1.jpg' },
    { source: 'images/grid/with_prof.jpg' },
    { source: 'images/grid/mic.jpg' },



  ],
  showNumOfRemainingPhotos: true
};

const Index = () => (
  <Main
    description={"Gihan Gamage's personal website. PhD candidate at La Trobe University, Australia, "
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Me</Link></h2>

        </div>
      </header>
      <p>
        Hi, I&apos;m Gihan.PhD scholar at <a href="https://www.latrobe.edu.au/cdac">CDAC, Latrobe University, Australia.</a> I enjoy working with the latest research disciplines and real world applications. Interested and have experience in working with Data Science and Machine Learning, Bioinformatics, Natural Language Processing.
      </p>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>

    </article>

    {/*<PhotoAlbum layout="rows" photos={photos} />*/}
    {/*<PhotoAlbum layout="columns" photos={photos1} />*/}
    <ReactPhotoCollage {...setting} />
  </Main>
);

export default Index;
