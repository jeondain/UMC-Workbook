import React from 'react';
import Overview from './Overview';

function Movie({ title, poster_path, vote_average, overview }) {
  return (
    <div className='poster'>
      <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} />
      <div className='title-box'>
        <div className='title'>
          {title}
        </div>
        <div className='vote_average'>
          {vote_average}
        </div>
      </div>
      <Overview
        title={title}
        overview={overview}
      />
    </div>
  )
}

export default Movie
