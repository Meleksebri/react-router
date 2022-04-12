import "bootstrap/dist/css/bootstrap.min.css";
import AddCard from "./components/AddCard";
import "./components/MovieCard.css";
import MovieList from "./components/MovieList";
import Movies from "./components/Movies.js";
import { useState } from "react";
import Stars from "./components/Stars";
import Filter from "./components/Filter";
import Header from "./components/Header";

function App() {
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState(0);
  const filter1 = (e) => setSearch1(() => e.target.value);
  const filter2 = (numberstars) => setSearch2(numberstars);
  const [movies, setmovies] = useState(Movies);
  const addNewSerie = (el) => setmovies([...movies, el]);
  return (
    <div>
      <Header addSerie={addNewSerie} />
      <Filter search1={filter1} search2={filter2} />
      <MovieList movie={movies} name={search1} rating={search2} />
    </div>
  );
}

export default App;
