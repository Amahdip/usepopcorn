import React, { useState } from "react";
import Movie from "./Movie";
import Button from "./Button";

function Movies({ movies }) {
	function handleToggle1() {
		setIsOpen1((isOpen1) => !isOpen1);
	}

	const [isOpen1, setIsOpen1] = useState(true);

	return (
		<div className='box'>
			<Button onClick={handleToggle1}>{isOpen1 ? "–" : "+"}</Button>
			{isOpen1 && (
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
			)}
		</div>
	);
}

export default Movies;
