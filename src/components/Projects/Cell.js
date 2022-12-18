import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {Link} from "react-router-dom";

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <a href={data.link}>
        <h1>{data.title}</h1>
        </a>
        <time className="published" style={{fontSize: "15px"}}>{dayjs(data.date1).format('MMMM, YYYY')} - {dayjs(data.date2).format('MMMM, YYYY')}</time>
        <h5>{data.desc}</h5>
      </header>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>



    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
