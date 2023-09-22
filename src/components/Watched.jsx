import React from "react";
import Movie from "./Movie";

function Watched({ movies }) {
	return (
		<ul className='list'>
			{movies?.map((movie) => (
				<Movie movie={movie}>
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
							<span>{movie.runtime}</span>
						</p>
					</div>
				</Movie>
			))}
		</ul>
	);
}

export default Watched;
