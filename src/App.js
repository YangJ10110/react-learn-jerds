import { useState, useEffect } from "react";
import "./App.css";
import "./MovieCard";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//a547d563

const API_URL = "http://www.omdbapi.com?apikey=a547d563";

const movie1 = {
  Title: "Batman: The Brave and the Bold",
  Year: "2008–2011",
  imdbID: "tt1213218",
  Type: "series",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYzAyMzZjMDMtYTYyZS00NGJlLWI2ZmQtZTQ3ZGJmNjYwZWFiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
};
const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Bold");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">NO MOVIES FOUND</div>
      )}
    </div>
  );
};

export default App;
