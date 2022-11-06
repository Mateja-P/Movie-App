import React, { memo } from 'react';
import '../Styles/Card.scss';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Card({ id, image, title, date, hour, runtime }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className='card__link'
      onClick={() => {
        navigate(`/show/${id}`);
      }}
      whileHover={{ scale: 1.1, zIndex: 3 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <div className='image__div'>
        {!image ? (
          <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' />
        ) : (
          <img src={image} />
        )}
      </div>
      <div className='card-info'>
        <h1>{title}</h1>
        <p className='runtime'>Lasts: {runtime}mins</p>
        <p className='start-time'>
          Starts: {date} - {hour}
        </p>
      </div>
    </motion.div>
  );
}

export default memo(Card);
