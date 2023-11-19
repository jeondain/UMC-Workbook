import { BrowserRouter, Route, Routes } from "react-router-dom";
import { movies } from './movieDummy.js';
import Header from './Components/Header.jsx';
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Celebirity from "./pages/Celebirity.jsx";
import TV from "./pages/TV.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <div className="App">
        <div className="app-container">
          <Routes>         
            <Route path="/" element={<Home/>} />
            <Route path="/Movies" element={<div className="container"><Movies movies={movies.results} /></div>} />
            <Route path="/TV" element={<TV/>} />
            <Route path="/Celebirity" element={<Celebirity/>} />
            <Route path="/Movies/:title" element={<MovieDetail />} />
            <Route path="/Login" element={<LoginPage/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div> 
    </BrowserRouter>
  );
}

export default App;
