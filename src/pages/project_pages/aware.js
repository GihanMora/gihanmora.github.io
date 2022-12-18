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
          <h2 data-testid="heading"><Link to="/contact">Emotion AWARE - Comprehension of emotions in Natural languages</Link></h2>
        </div>


      </header>
      <div>
        <h3>Introduction</h3>
        <p>In this project, we address this challenge through the design and development of a novel AI framework for the adaptable, robust, and explainable elicitation of multi-granular assembles of emotions. </p>
          <p><b>Key points of AWARE compared to state-of-the-art emotion detection models.</b></p>
        <ul>
        <ul>
            <li>Ability to generate multifaceted emotion profiles with corresponding intensity scores.
            <ul><ul>
                <li><u>Example </u>: <i>“New treatment plan helps me to feel better and relaxed than ever”.</i><br/>
                <u>Emotion Profile</u> : <i>[ Joy : 0.530, Trust : 0.455, Anticipation : 0.048 …]</i>

              </li>
            </ul></ul>
            </li>
            <li>Robustness to intensifiers, inhibitors and negations.
                <ul><ul>
                    <li>Negation : <br/>
                        <ul><ul>
                            <i>“Clinical staff was <b>supportive.</b>”. ---  Joy</i><br/>
                            <i>“Clinical staff was <b>not supportive.</b>”. ---  Sadness</i>
                        </ul></ul>
                    </li>
                </ul></ul>
                <ul><ul>
                    <li>Modifiers : <br/>
                        <ul><ul>
                            <i>“I’m feeling <b>relaxed</b> after talking to them."           ---- Joy : 0.421</i><br/>
                            <i>"I’m feeling <b>extremely relaxed</b> after talking to them." ---- Joy : 0.677</i><br/>
                            <i>"I’m feeling <b>little relaxed</b> talking to them."          ---- Joy : 0.332</i><br/>

                        </ul></ul>
                    </li>
                </ul></ul>
            </li>
            <li>Ability to adapt to a given domain.
            </li>
            <li>Explainability in emotion extraction.
                <ul><ul>
                    <li><i>“I’m feeling relaxed after the radiation therapy.” . --> <b>relaxed</b>
                    </i>

                    </li>
                    <li>
                        <i>"The leg is painful when walking." --> <b>painful</b>
                        </i>

                    </li>
                </ul></ul>
            </li>
          </ul></ul>
          <p>Emotion AWARE is based on a hybrid/neuro-symbolic architecture which bridges language models and rule-based approaches.
          Here the basic idea is to extract significant implicit and explicit features from a given text and compare it with emotional concepts space and use most matching concepts to decide the emotional profile.
          </p>

          <h3>Framework</h3>
          <p>Following is the framework of Emotion AWARE.</p>
          <img width={1000} src={`${process.env.PUBLIC_URL}/images/projects/aware_framework.png`}  />
          <h3>How Emotion AWARE works.</h3>
          <p>Following is an example of Emotion AWARE works. Here it build emotion profile for sentence, <i>“The movie had a great start, but the ending was awful”</i> which has mixed emotions.</p>
          <img width={1000} src={`${process.env.PUBLIC_URL}/images/projects/aware_example.png`}  />
          <h3>Technologies and areas</h3>
          <p>Python, Deep learning - Language models(BERT), Text similarity matching, word/sentence embedding, lexicon matching</p>
          <h3>Team</h3>
          <p>Gihan Gamage(me), A. Prof. Daswin De Silva, Prof. Damminda Alahakoon</p>
          <h3>Publications</h3>
          <p>Publication in review</p>


      </div>


    </article>
  </Main>
);

export default Contact;
