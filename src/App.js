import { BrowserRouter, Route, Routes } from "react-router-dom";
import { movies } from './movieDummy.js';
import Movie from './Components/Movie/Movie'
import Header from './Components/Header.jsx';
import Home from "./pages/Home.jsx";
import Ad from "./Components/Ad.jsx";
import * as MS from './Components/Movie/Movie.style'

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <MS.AppWrapper>
        <MS.AppContainer>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Ad" element={<Ad/>} />
            <Route path="/Movies" element={<MovieList movies={movies.results} />} />
          </Routes>
        </MS.AppContainer>
      </MS.AppWrapper> 
    </BrowserRouter>
  );
}

function MovieList({ movies }) {
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

export default App;
