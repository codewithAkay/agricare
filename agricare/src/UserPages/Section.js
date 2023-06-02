import React from 'react';

function Section(props) {
  return (
    <section className="section">
      <div className="section-content">
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </div>
      <div className="section-image">
        <img src={props.image} alt={props.title} />
      </div>
    </section>
  );
}

export default Section;
