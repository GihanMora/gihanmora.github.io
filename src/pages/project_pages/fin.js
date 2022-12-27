import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import Main from '../../layouts/Main';
import EmailLink from '../../components/Contact/EmailLink';
import ContactIcons from '../../components/Contact/ContactIcons';



const Contact = () => (


  <Main
    title="Emotion analysis of financial transcripts"
    description="Contact Gihan Gamage via email @ michael.l.dangelo@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Emotion analysis of financial transcripts</Link></h2>
        </div>


      </header>
      <div>
        <h3>Introduction</h3>
        <p>The main objective of this project was to analyse emotions in transcripts of earning call conference meetings and study the impact on market variables.
          Here a total of 12,521 transcripts of earnings conference meetings from 2010 to 2020 were analysed.
          These documents contain meeting minutes of earning conference calls which reflect valuable information summarizing various managerial decisions and financial information.
          These meetings are participated by the CEO, senior management and external parties such as analysts and investors.
          This information is reflected in different market variables such as stock prices and trading volumes.<br/>
          The main objectives are as follows.
          <ul><ul>
            <li>Analyse the emotions of the CEO, Senior management and analysts throughout different sections of earning conference. Here we used adapted version of emotion aware to the financial domain.</li>
            <li>Analyse emotional dynamics during the meetings.
            </li>
            <li>Analysing emotional agreement between CEO and analyst.
            </li>
            <li>Compare the emotional tones with different market variables such as CAR(Commutative abnormal returns).
            </li>

          </ul></ul>

        </p>

          <h3>Framework</h3>
          <p>Following figure shows the framework of the system.</p>
          <img width={'100%'} src={`${process.env.PUBLIC_URL}/images/projects/fin_framework.png`}  />

        <h3>Results</h3>
        <p>Summary of the results from transcript analysis.</p>
        <img width={'100%'} src={`${process.env.PUBLIC_URL}/images/projects/fin_res1.png`}  />
        <img width={'100%'} src={`${process.env.PUBLIC_URL}/images/projects/fin_res2.png`}  />

        <h3>Technologies and areas</h3>
        <p>Python, Keyword matching, Word embedding, Deep emotion extraction(Emotion AWARE), Document parsing,  Emotion dynamics</p>
        <h3>Team</h3>
        <p>Gihan Gamage(me), Luisa Ana Langer, Dinithi Ranasinghe, A. Prof. Daswin De Silva, Paul Mather</p>
        <h3>Publications</h3>
        <p>Publication in review</p>

      </div>


    </article>
  </Main>
);

export default Contact;
