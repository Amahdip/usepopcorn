import React from "react";
import Movie from "./Movie";

function MoviesList({ movies }) {
	return (
		<ul className='list'>
			{movies?.map((movie) => (
				<Movie movie={movie}>
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
