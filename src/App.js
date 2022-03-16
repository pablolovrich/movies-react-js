import syles from "./App.module.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieDetails from './pages/MovieDetails';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter className="App">
      <header>
        <Link to="/">
          <h1 className={syles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
