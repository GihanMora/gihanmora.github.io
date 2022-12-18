import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import Main from '../layouts/Main';


const Contact = () => (


    <Main
        title="Publications"
        description="Contact Gihan Gamage via email @ michael.l.dangelo@gmail.com"
    >
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/contact">Publications</Link></h2>
          </div>


        </header>
        <div>
          <h3><u>Working papers</u></h3>
          <p><b>Emotion AWARE: An Artificial Intelligence Framework for the Elicitation of Adaptable, Robust, and Explainable Multi-Granular Emotion Assembles
          </b><br/>
          Nature Human Behaviour<br/>
            G Gamage, D De Silva, P Rathnayaka, D Alahakoon</p>

          <p><b>Managerial emotion intensity and investor’s response
          </b><br/>
            Journal of Business Finance & Accounting<br/>
            G Gamage, L Unda, D Ranasinghe, D De Silva, P Mather</p>

          <h3><u>Published</u></h3>

          <p><b>A self-structuring artificial intelligence framework for deep emotion modeling and analysis on the social web
          </b><br/>Future Generation Computer Systems 116, 302-315<br/>
            A Adikari, G Gamage, D De Silva, N Mills, SMJ Wong, D Alahakoon </p>

          <p><b>A BERT-based Idiom Detection Model
          </b><br/>2022 15th International Conference on Human System Interaction (HSI)<br/>
            G Gamage, D De Silva, A Adikari, D Alahakoon  </p>

          <p><b>An Artificial Intelligence Framework for the Detection of Emotion Transitions in Telehealth Services
          </b><br/>2022 15th International Conference on Human System Interaction (HSI)<br/>
            Sajani Ranasinghe, G Gamage, Harsha Moraliyage, Nishan Mills, Nikki McCaffrey, Jessica Bucholc, Katherine Lane, Angela Cahill, Victoria White, Daswin De Silva   </p>

          <p><b>Emotional transformations during Victoria's Cancer Council 131120 information and support service calls detected using Artificial Intelligence

          </b><br/>COSA's 49th Annual Scientific Meeting Equitable cancer care for all: Gender, identity, culture, geography, and disease should not matter, 2–4 November 2022
            <br/>
            Daswin De Silva, Sajani Ranasinghe, G Gamage, Harsha Moraliyage, Nishan Mills, Jessica Bucholc, Katherine Lane, Angela Cahill, Victoria White Nikki McCaffrey   </p>

          <p><b>Cooee: An Artificial Intelligence Chatbot for Complex Energy Environments

          </b><br/>2022 15th International Conference on Human System Interaction (HSI)<br/>
            G Gamage, N Mills, P Rathnayaka, A Jennings, D Alahakoon   </p>

          <p><b>Investigating COVID-19 Vaccine Messaging in Online Social Networks using Artificial Intelligence
          </b><br/>2022 15th International Conference on Human System Interaction (HSI)<br/>
            Kirishnni Prabagar, Kogul Srikandabala, Nilaan Loganathan, Daswin De Silva, G Gamage, Damminda Alahakoon  </p>


        </div>


      </article>
    </Main>
);

export default Contact;
