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
          <h2 data-testid="heading"><Link to="/contact">Cooee: Artificial Intelligence Chatbot</Link></h2>
        </div>


      </header>
      <div>
        <h3>Introduction</h3>
        <p>Traditionally most chatbots today we have is following hardwired routines(Ex: Ordering a pizza) or predefined question answering(FAQ).
        These chatbots are based on simple string-matching methods where inputs are matching with QnA data databases.
          But this is not applicable in highly dynamic data-insensitive environments.
          With Cooee we attempted to build a chatbot that can intelligently comprehend user queries and construct responses on the fly.<br/><br/>
            We experimented with and evaluated Cooee Latrobe Energy Analytics Platform – LEAP. LEAP contains a billion data points belonging to modalities such as electricity consumption, gas consumption, and solar generation, and this data is streamed at 15-minute intervals.
            This complex multi-source data space contains more than 200 data tables.

        </p>





          <h3>Framework</h3>
          <p>Following is the framework of Cooee.</p>
          <img width={1000} src={`${process.env.PUBLIC_URL}/images/projects/cooee_framework.png`}  />
          <h3>How Cooee works.</h3>
          <p>Following is an example of Cooee works. Here it tries to understand user query, <i>“What is the total energy consumption of library last Monday?”</i> It goes through various information extraction steps, converted to SQL query and compared against the database in order to extract the correct answers.</p>
          <img width={1000} src={`${process.env.PUBLIC_URL}/images/projects/cooee_example.png`}  />
        <h3>Cooee Implementation.</h3>
        <p>We integrated cooee to leap as QnA dashboard as well as chat popup.. Chat pop-up is for conversational question answering and dashboard is for more comprehension question answering where it can also produce tabular outputs as answers.
        </p>
        <img width={1000} src={`${process.env.PUBLIC_URL}/images/projects/cooee_implementation.png`}  />

        <h3>Higher order comprehension skills with Cooee.</h3>
        <p>Cooee has some advanced comprehension skills. It can resolve ambiguates, resolve coreferences and infer incomplete information.</p>
        <ul>
          <li>Resolve ambiguates
          <p>Resolving ambiguities is one of the major challenges in natural languages. Cooee uses chat history to resolve this challenge.<br/>
            For instance when Cooee is working in multi-campus setting asking a question like <i><b>"What is the total electricity consumption of library?"</b></i> can be ambiguous.
            Where there are multiple libraries.. Such as the library of Bundoora campus, library of Bendigo campus etc.<br/>
            So here what Cooee does is it will convert this ambiguous question to set of disambiguate questions such as..
            <i><b>"What is the total electricity consumption of the Library <u>on the Bendigo campus?</u>"</b></i>,
              <i><b>"What is the total electricity consumption of the Library<u> on the Bundoora campus?</u>"</b></i>
            and leverage previous chat history and natural language inference to pick the correct questions.

            So here as recent chat history is talking about Bendigo campus it gives higher probability for Bendigo campus…

          </p>
            <img width={1000} src={`${process.env.PUBLIC_URL}/images/projects/cooee_ambi.png`}  />
          </li>
          <li>Co-reference resolution and Answer incomplete questions.
          <p>Similar to resolving ambiguations, Cooee can resolve incomplete questions and co-references</p>
            <img width={1000} src={`${process.env.PUBLIC_URL}/images/projects/cooee_other.png`}  />
          </li>
        </ul>

        <h3>Technologies and areas</h3>
        <p>Python, Deep learning - Language models(BERT), Text similarity matching, Token classification(NER), Regexes, Web development(ReactJS, Redux, HTML, JS, CSS)</p>
        <h3>Team</h3>
        <p>Gihan Gamage(me), Nishan Mills, A. Prof. Daswin De Silva</p>
        <h3>Publications</h3>
        <p>Publication in review</p>



      </div>


    </article>
  </Main>
);

export default Contact;
