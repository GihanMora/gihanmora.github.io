import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" style={{ height: '300px', width: '300px' }} />
      </Link>
      <header>
        <h2>Gihan Gamage</h2>
        <p><a href="mailto:gihangamage2015@gmail.com">gihangamage2015@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Gihan.PhD scholar at <a href="https://www.latrobe.edu.au/cdac">CDAC, Latrobe University, Australia.</a> I enjoy working with the latest research disciplines and real world applications. Interested and have experience in working with Data Science and Machine Learning, Bioinformatics, Natural Language Processing.

      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Gihan Gamage <Link to="/">d</Link>.</p>
    </section>
  </section>
);

export default SideBar;
