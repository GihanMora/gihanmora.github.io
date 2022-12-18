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
            <h2 data-testid="heading"><Link to="/contact">LEAD Generation Pipeline</Link></h2>
          </div>


        </header>
        <div>
          <h3>Introduction</h3>
          <p>The main objective of this project was to construct organization profiles using the available information in the internet. It utilizes various web scraping and information
            extraction components to support that. Following are the components in lead generation pipeline.
            <ul><ul>
              <li>Google search result scraper</li>
              <li>Crunchbase web profile filter and extractor</li>
              <li>Open Corporates web profile extractor</li>
              <li>D&B web profile extractor</li>
              <li>Avention web profile extractor</li>
              <li>Google address extractor</li>
              <li>Google telephone number extractor</li>
              <li>Google CEO/MD extractor</li>
              <li>Website contact page extractor</li>
              <li>Linkedin information extractor through Google</li>
              <li>Owler Q&A extractor through Google</li>
              <li>Deep crawler on website</li>


            </ul></ul>

          </p>

          <h3>Framework</h3>
          <p>Following figure depicts lead generation pipeline.</p>
          <img width={1000} src={`${process.env.PUBLIC_URL}/images/projects/armitage_framework.png`}  />

          <h3>Technologies and areas</h3>
          <p>Azure services(Virtual Machines, Storage queues), MongoDB, Python, Flask, Web Crawling, HTML, NLP(keyword/topic extraction, text clustering and classification)</p>
          <h3>Team</h3>
          <p>Nishan Mills, Gihan Gamage(me)</p>






        </div>


      </article>
    </Main>
);

export default Contact;
