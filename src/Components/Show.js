import axios from 'axios';
import React, { useEffect, useState, memo } from 'react';
import { useParams } from 'react-router-dom';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import '../Styles/Show.scss';

function Show() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`).then((res) => {
      setMovie(res.data);
    });
  }, []);

  //commit basic show page
  //responsive za homepage ali bez commita
  //commit kda se odradi responsive dizajn za obe stranice

  console.log(movie);

  return (
    <div className='show-div__wrapper'>
      <div className='show-div__content'>
        <h1>
          TV <span className='logo'>Bland</span>
        </h1>
        <div className='show-basic-info__div'>
          <div className='show-image__div'>
            <img src={movie.image ? movie.image.medium : 'No image'} />
          </div>
          <div className='show-text__div'>
            <h1>{movie.name}</h1>
            <p>{movie.summary}</p>
          </div>
        </div>
        <div className='flex-info__div'>
          <div className='show-info__wrapper'>
            <h3>Show info</h3>
            <div className='each-show-info'>
              <span className='info__span'>Streamed on</span>
              <div className='flex__width'>
                {movie.network ? movie.network.name : 'Undefined name'}
              </div>
            </div>
            <div className='each-show-info'>
              <span className='info__span'>Schedule</span>
              <div className='flex__width'>
                {movie.schedule
                  ? movie.schedule.days.map((day) => {
                      return ' ' + day + ' ';
                    })
                  : 'Undefined Date'}
              </div>
            </div>
            <div className='each-show-info'>
              <span className='info__span'>Status</span>
              <div className='flex__width'>{movie.status}</div>
            </div>
            <div className='each-show-info'>
              <span className='info__span'>Genre </span>
              <div className='flex__width'>
                {movie.genres
                  ? movie.genres.map((genre) => {
                      return genre;
                    })
                  : 'No genres'}
              </div>
            </div>
          </div>
          <div className='links-div__wrapper'>
            <h3>Useful links</h3>
            <div className='each-show-info'>
              <OpenInNewIcon />
              <div className='flex__width'>
                {movie.officialSite ? (
                  <a href={movie.officialSite} target='_blank'>
                    Official site
                  </a>
                ) : (
                  'No available site'
                )}
              </div>
            </div>
            <div className='each-show-info'>
              <LiveTvIcon />
              <div className='flex__width'>
                {movie.url ? (
                  <a href={movie.url} target='_blank'>
                    TVMaze
                  </a>
                ) : (
                  'No site'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Show);
