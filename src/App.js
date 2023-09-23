import { useState } from "react";
import Navbar from "./components/Navbar";
import tempMovieData from "./data/movies"
import Main from "./components/Main";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Logo from "./components/Logo";
import Movies from "./components/Movies";
import Watched from "./components/Watched";
import tempWatchedData from "./data/watchList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedList from "./components/WatchedList";



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
        <Movies movies={movies} />
        <Watched>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Watched>

      </Main>

    </>
  );
}

export default App
