import React from "react";
import Movie from "./Movie";

function MoviesList({ movies, onSelect }) {
	return (
		<ul className='list list-movies'>
			{movies?.map((movie) => (
				<Movie key={movie.imdbID} movie={movie} onSelect={onSelect}>
					<div>
						<p>
							<span>🗓</span>
							<span>{movie.Year}</span>
						</p>
					</div>
				</Movie>
			))}
		</ul>
	);
}

export default MoviesList;
