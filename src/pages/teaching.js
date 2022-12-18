import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import Main from '../layouts/Main';


const Contact = () => (


    <Main
        title="Teaching"
        description="Contact Gihan Gamage via email @ michael.l.dangelo@gmail.com"
    >
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/contact">Teaching</Link></h2>
          </div>


        </header>
        <div>
          <h3>Business School, La Trobe University, Melbourne, Australia.</h3>
          <h4>Teaching Assistant(Feb 2022 – Present)</h4>
          <ul><ul>
            <li> Teaching - BUS5AP - Business Application of Analytics 2022 - Semester 01</li>
            <li> Teaching - BUS5AP - Business Application of Analytics 2022 - Semester 02</li>
            <li> Teaching - OptusU-AIN(AI for natural language processing) </li>

          </ul></ul>


          <h3>Department of Computer Science and Engineering, University of Moratuwa, Sri Lanka</h3>
          <h4>Contract based lecturer(Sep 2020 – Sep 2021)</h4>
          <ul><ul>
            <li> Teaching - Modular Software Development - CS2832</li>
            <li> Mentoring - Research and Development Project-CS4202</li>
          </ul></ul>
          <h4>Junior Consultant(Feb 2020 – Sep 2020)</h4>
          <ul><ul>
            <li>Teaching Assistance - Programming Fundamentals-CS1032</li>
          <li>Teaching Assistance - Software Engineering Project-CS3202</li>
            <li>Teaching Assistance - Research and Development Project-CS4202</li>
            <li>Teaching Assistance - Machine Learning-CS4622</li>
          </ul></ul>

        </div>


      </article>
    </Main>
);

export default Contact;
