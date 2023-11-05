import { BrowserRouter, Route, Routes } from "react-router-dom";
import { movies } from './movieDummy.js';
import Header from './Components/Header.jsx';
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import * as MS from './Components/Movie/Movie.style'
import Celebirity from "./pages/Celebirity.jsx";
import TV from "./pages/TV.jsx";

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <MS.AppWrapper>
        <MS.AppContainer>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Movies" element={<Movies movies={movies.results} />} />
            <Route path="/TV" element={<TV/>} />
            <Route path="/Celebirity" element={<Celebirity/>} />
          </Routes>
        </MS.AppContainer>
      </MS.AppWrapper> 
    </BrowserRouter>
  );
}



export default App;
