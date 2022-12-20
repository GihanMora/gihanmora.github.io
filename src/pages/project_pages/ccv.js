import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import Main from '../../layouts/Main';
import EmailLink from '../../components/Contact/EmailLink';
import ContactIcons from '../../components/Contact/ContactIcons';



const Contact = () => (


  <Main
    title="Armitage project"
    description="Contact Gihan Gamage via email @ michael.l.dangelo@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Call recording analysis of Cancer Council Victoria(CCV)</Link></h2>
        </div>


      </header>
      <div>
        <h3>Introduction</h3>
        <p>The main objective of this project was to analyse call recordings received to cancer council Victoria(CCV) and generate interactive dashboard.
          Here a total of 60,081 calls were analysed from 2018 to 2021.
          Following are the main objectives.
          <ul><ul>
            <li>Transcribe the call recordings.</li>
            <li>Extract emotions from the phone calls belonging to bipolar and eight emotion spectrum.
            <ul>
              <ul>
                <li>Analysing the emotion outputs.</li>
                <li>Analysing keywords belonging to different emotions.</li>
                <li>Analysing emotions based on call length, type of cancer, stages of cancer and different temporal dimensions.</li>
              </ul>
            </ul>
            </li>
            <li>Model emotional trends throughout the calls. - How emotion intensity fluctuated over the period of the call
            </li>
            <li>Thematic extraction of the call recordings. - Extract different themes using seed words.
            </li>

          </ul></ul>

        </p>

          <h3>Framework</h3>
          <p>Following figure shows the framework of the system.</p>
          <img width={'100%'} src={`${process.env.PUBLIC_URL}/images/projects/ccv_framework.png`}  />

        <h3>Results</h3>
        <p>Summary of the results from call analysis.</p>
        <img width={'100%'} src={`${process.env.PUBLIC_URL}/images/projects/ccv1.png`}  />
        <img width={'100%'} src={`${process.env.PUBLIC_URL}/images/projects/ccv2.png`}  />

        <h3>Technologies and areas</h3>
        <p>Python, Keyword matching, Word embedding, Deep emotion extraction(Emotion AWARE), Speech-to-text(Azure), Emotion dynamics</p>
        <h3>Team</h3>
        <p>Gihan Gamage(me), Sajani Ranasinghe, A. Prof. Daswin De Silva, Harsha Kumara</p>
        <h3>Publications</h3>

        <p><b>An Artificial Intelligence Framework for the Detection of Emotion Transitions in Telehealth Services
        </b><br/>2022 15th International Conference on Human System Interaction (HSI)<br/>
          Sajani Ranasinghe, G Gamage, Harsha Moraliyage, Nishan Mills, Nikki McCaffrey, Jessica Bucholc, Katherine Lane, Angela Cahill, Victoria White, Daswin De Silva   </p>

        <p><b>Emotional transformations during Victoria's Cancer Council 131120 information and support service calls detected using Artificial Intelligence

        </b><br/>COSA's 49th Annual Scientific Meeting Equitable cancer care for all: Gender, identity, culture, geography, and disease should not matter, 2–4 November 2022
          <br/>
          Daswin De Silva, Sajani Ranasinghe, G Gamage, Harsha Moraliyage, Nishan Mills, Jessica Bucholc, Katherine Lane, Angela Cahill, Victoria White Nikki McCaffrey   </p>



      </div>


    </article>
  </Main>
);

export default Contact;
