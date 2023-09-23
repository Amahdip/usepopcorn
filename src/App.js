import { useState } from "react";
import Navbar from "./components/Navbar";
import tempMovieData from "./data/movies"
import Main from "./components/Main";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Logo from "./components/Logo";
import Box from "./components/Box";
import tempWatchedData from "./data/watchList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedList from "./components/WatchedList";
import MoviesList from "./components/MoviesList";



function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);


  return (
    <>
      <Navbar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MoviesList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>

      </Main>

    </>
  );
}

export default App
