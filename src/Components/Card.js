import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Card.scss';

function Card({ id, title, date, image }) {
  return (
    <Link className='card__link' to={`/show/${id}`}>
      <div className='image__div'>
        {!image ? (
          <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' />
        ) : (
          <image src={image} />
        )}
      </div>
      <div className='card-info'>
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
    </Link>
  );
}

export default Card;
