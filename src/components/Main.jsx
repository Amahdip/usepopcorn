import React, { useState } from "react";
import Movies from "./Movies";
import Watched from "./Watched";
import Button from "./Button";
import tempWatchedData from "../data/watchList";

function Main({ movies }) {
	const average = (arr) =>
		arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

	const [watched, setWatched] = useState(tempWatchedData);
	const [isOpen1, setIsOpen1] = useState(true);
	const [isOpen2, setIsOpen2] = useState(true);

	const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	const avgUserRating = average(watched.map((movie) => movie.userRating));
	const avgRuntime = average(watched.map((movie) => movie.runtime));

	function handleToggle1() {
		setIsOpen1((isOpen1) => !isOpen1);
	}

	function handleToggle2() {
		setIsOpen2((isOpen2) => !isOpen2);
	}
	return (
		<main className='main'>
			<div className='box'>
				<Button onClick={handleToggle1}>{isOpen1 ? "–" : "+"}</Button>
				{isOpen1 && <Movies movies={movies} />}
			</div>

			<div className='box'>
				<Button onClick={handleToggle2}>{isOpen2 ? "–" : "+"}</Button>
				{isOpen2 && (
					<>
						<div className='summary'>
							<h2>Movies you watched</h2>
							<div>
								<p>
									<span>#️⃣</span>
									<span>{watched.length}movies</span>
								</p>
								<p>
									<span>⭐️</span>
									<span>{avgImdbRating}</span>
								</p>
								<p>
									<span>🌟</span>
									<span>{avgUserRating}</span>
								</p>
								<p>
									<span>⏳</span>
									<span>{avgRuntime}min</span>
								</p>
							</div>
						</div>
						<Watched movies={watched} />
					</>
				)}
			</div>
		</main>
	);
}

export default Main;
