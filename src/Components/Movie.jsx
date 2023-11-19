import React from 'react';
import Overview from './Overview';
import { useNavigate } from 'react-router-dom';

const Movie = ({ title, poster_path, vote_average, overview }) => {
  const navigate = useNavigate();

  const onClickImg = () => {
    // Navigate to the detailed page with the necessary information
    navigate(`/Movies/${title}`, {
      state: {
        title,
        poster_path,    
        vote_average, 
        overview
      },
    });
  };

  return (
    <div className="poster" onClick={onClickImg }>
      <img className="img" src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} alt={title} />
      <div className="title-box">
        <div className="title">{title}</div>
        <div className="vote_average">{vote_average}</div>
      </div>
      <Overview
        title={title}
        overview={overview}
      />
    </div>
  );
};

export default Movie;