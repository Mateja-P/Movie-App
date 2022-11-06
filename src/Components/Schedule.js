import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import '../Styles/Schedule.scss';

function Schedule() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(`https://api.tvmaze.com/schedule`).then((res) => {
      setMovies(res.data);
    });
  }, []);

  return (
    <div className='schedule-div__wrapper'>
      <div className='schedule-div__content'>
        <div className='schedule-div__background'>
          <div className='schedule-heading__div'>
            <h1>
              TV <span className='logo'>Bland</span>
            </h1>
            <div>
              <p>TV Show and web series database.</p>
              <p>Create personalised schedules.</p>
              <p>Episode, guide, cast, crew and character information.</p>
            </div>
          </div>
          <div className='schedules-content__div'>
            <h3>Last added Shows</h3>
            <div className='schedules-grid__div'>
              {movies.map((movie, index) => {
                return (
                  <Card
                    image={movie.image}
                    id={movie.show.id}
                    title={movie.name}
                    key={index}
                    date={movie.airdate}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
