import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container" >
    <header>

        <img src={data.image} alt="" style={{ height: data.image_height, width: data.image_width, float:"right"}} />
        <h3 className="degree">{data.degree}</h3>
        <p className="school"><a href={data.link}>{data.school}</a></p>
        <p className="school">{data.year}</p>
        <p className="school">{data.des}</p>

    </header>
      <p><br/></p>


  </article>

);





Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Degree;
