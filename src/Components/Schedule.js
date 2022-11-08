import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Card from './Card';
import '../Styles/Schedule.scss';
import Pagination from './Pagination';

function Schedule() {
  const [allMovies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState(12);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/schedule`).then((res) => {
      setMovies(res.data);
    });
  }, []);

  const contentDiv = useRef();

  function scrollOffset() {
    if (contentDiv.current != undefined) {
      return contentDiv.current.offsetTop;
    }
  }

  const lastIndex = page * posts;
  const firstIndex = lastIndex - posts;
  const movies = allMovies.slice(firstIndex, lastIndex);

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
          <div ref={contentDiv} className='schedules-content__div'>
            <h3>Last added Shows</h3>
            <div className='schedules-grid__div'>
              {movies.map((movie, index) => {
                return (
                  <Card
                    image={
                      movie.show.image ? movie.show.image.medium : movie.image
                    }
                    id={movie.show.id}
                    title={movie.name}
                    key={index}
                    date={movie.airdate}
                    hour={movie.airtime}
                    runtime={movie.runtime}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Pagination
          totalPosts={allMovies.length}
          postsPerPage={posts}
          setPage={setPage}
          currentPage={page}
          scrollTo={scrollOffset()}
        />
      </div>
    </div>
  );
}

export default Schedule;
