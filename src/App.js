import { useState } from "react";
import { useMovies } from "./components/useMovies";
import { useLocalStorageState } from "./components/useLocalStorageState";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Logo from "./components/Logo";
import Box from "./components/Box";
import WatchedSummary from "./components/WatchedSummary";
import WatchedList from "./components/WatchedList";
import MoviesList from "./components/MoviesList";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import MovieDetails from "./components/MovieDetails";



const KEY = "e493899d"




function App() {

  const [query, setQuery] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], 'watched');






  function handleSelectMovie(id) {
    setSelectedMovieId((selectedMovieId) => (id === selectedMovieId) ? null : id)
  }

  function handleCloseSelectedMovie() {
    setSelectedMovieId(null)
  }

  function handleAddWatched(movie) {
    setWatched(watched => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched(watched => watched.filter((movie) =>
      movie.imdbID !== id))
  }
  function handleSelectWatchedMovie(id) {
    return id;
  }




  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MoviesList movies={movies} onSelect={handleSelectMovie} />}
          {error && <ErrorMessage message={error} />}

        </Box>
        <Box> {selectedMovieId ?
          <MovieDetails selectedMovieId={selectedMovieId} onClose={handleCloseSelectedMovie} APIKEY={KEY} onAddWatched={handleAddWatched} watched={watched} />
          :
          <>
            <WatchedSummary watched={watched} />
            <WatchedList watched={watched} onDelete={handleDeleteWatched} onSelect={handleSelectWatchedMovie} />
          </>
        }
        </Box>
      </Main>

    </>
  );
}


export default App
