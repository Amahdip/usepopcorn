import { useState } from "react";
import Navbar from "./components/Navbar";
import tempMovieData from "./data/movies"

import Main from "./components/Main";





export default function App() {
  const [movies, setMovies] = useState(tempMovieData);



  return (
    <>
      <Navbar movies={movies} />
      <Main movies={movies} />

    </>
  );
}
