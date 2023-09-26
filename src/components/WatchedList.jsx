import React from "react";
import Movie from "./Movie";

function WatchedList({ watched, onDelete, onSelect }) {
	return (
		<ul className='list list-movies'>
			{watched?.map((movie) => (
				<Movie key={movie.imdbID} movie={movie} onSelect={onSelect}>
					<div>
						<p>
							<span>⭐️</span>
							<span>{movie.imdbRating}</span>
						</p>
						<p>
							<span>🌟</span>
							<span>{movie.userRating}</span>
						</p>
						<p>
							<span>⏳</span>
							<span>{movie.Runtime}</span>
						</p>
						<button
							className='btn-delete'
							onClick={() => onDelete(movie.imdbID)}
						>
							X
						</button>
					</div>
				</Movie>
			))}
		</ul>
	);
}

export default WatchedList;
