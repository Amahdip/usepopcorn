import React from "react";

function Movie({ movie, children, onSelect }) {
	return (
		<li className='list-movies' onClick={() => onSelect(movie.imdbID)}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			{children}
		</li>
	);
}

export default Movie;
