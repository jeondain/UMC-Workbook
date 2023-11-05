import Movie from "../Components/Movie/Movie";

function Movies({ movies }) {
    return (
      <>
        {movies.map((item) => (
          <Movie
            key={item.id}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
          />
        ))}
      </>
    );
  }

  export default Movies;