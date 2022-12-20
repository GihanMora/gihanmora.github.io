import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import Main from '../../layouts/Main';
import EmailLink from '../../components/Contact/EmailLink';
import ContactIcons from '../../components/Contact/ContactIcons';



const Contact = () => (


    <Main
        title="LEAD Generation Pipeline"
        description="Contact Gihan Gamage via email @ michael.l.dangelo@gmail.com"
    >
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/contact">Idiom detection in English</Link></h2>
          </div>


        </header>
        <div>
          <h3>Introduction</h3>
          <p>In this work we used BERT language model to identify idiomatic phrases in english language. Also we published a dataset for idiom detection. Here the problem is modelled as a token classification problem and tagged each word as/not as a part of idiom.
            The approach was evaluated against public datasets and got more than 90% accuracies in 7 different experiments.


          </p>

          <h3>Framework</h3>
          <p>Following figure depicts lead generation pipeline.</p>
          <img width={'100%'} src={`${process.env.PUBLIC_URL}/images/projects/idiom_frame.png`}  />

          <h3>Technologies and areas</h3>
          <p>BERT, Huggingface, Token Classification, Python</p>
          <h3>Team</h3>
          <p>Gihan Gamage(me), A. Prof. Daswin De Silva, Achini Adikari, Prof. Damminda Alahakoon</p>






        </div>


      </article>
    </Main>
);

export default Contact;
