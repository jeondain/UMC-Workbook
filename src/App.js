import { movies } from './movieDummy.js';
import Movie from './Components/Movie/Movie'
import * as MS from './Components/Movie/Movie.style'

function App() {
  return (
    <MS.AppWrapper>
      <MS.AppContainer>
        {movies.results.map((item) => (
          <Movie
            key={item.id}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
          />  
        ))}
      </MS.AppContainer>
    </MS.AppWrapper> 
  );
}

export default App;
