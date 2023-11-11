import React from 'react';
import Overview from '../Overview';
import * as MS from './Movie.style'
import { useNavigate } from 'react-router-dom';


const Movie = ({ title, poster_path, vote_average, overview }) => {
  const navigate = useNavigate();

  const onClickImg = () => {
    // Navigate to the detailed page with the necessary information
    navigate(`/Movies/${title}`, {
      state: {
        title,
        poster_path    
      },
    });
  };

  return (
      <MS.AppWrapper>
        <MS.AppContainer>
          <MS.Poster onClick={onClickImg }>
            <MS.Image src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} alt={title} />
              <MS.TitleBox>
                <MS.Title>{title}</MS.Title>
                <MS.VoteAverage>{vote_average}</MS.VoteAverage>
              </MS.TitleBox>
              <Overview
                  title={title}
                  overview={overview}
              />
          </MS.Poster>
        </MS.AppContainer>
      </MS.AppWrapper>
  );
};

export default Movie;