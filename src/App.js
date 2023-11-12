import { BrowserRouter, Route, Routes } from "react-router-dom";
import { movies } from './movieDummy.js';
import Header from './Components/Header.jsx';
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import * as MS from './Components/Movie/Movie.style'
import Celebirity from "./pages/Celebirity.jsx";
import TV from "./pages/TV.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <MS.AppWrapper>
        <MS.AppContainer>
          <Routes>         
            <Route path="/Movies" element={<MS.Container><Movies movies={movies.results} /></MS.Container>} />
            <Route path="/" element={<Home/>} />
            <Route path="/TV" element={<TV/>} />
            <Route path="/Celebirity" element={<Celebirity/>} />
            <Route path="/Movies/:title" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MS.AppContainer>
      </MS.AppWrapper> 
    </BrowserRouter>
  );
}

export default App;
