import React, { useState } from "react";
import { useEffect } from "react";
import RatingStars from "./RatingStars";
import Loader from "./Loader";
import { useRef } from "react";
import { useKey } from "./useKey";

function MovieDetails({
	selectedMovieId,
	onClose,
	APIKEY,
	onAddWatched,
	watched,
}) {
	const [isLoading, setIsLoading] = useState(false);
	const [movieDetail, setMovieDetail] = useState([]);
	const [userRating, setUserRating] = useState(null);
	useKey("Escape", onClose);

	const isWatched = watched
		.map((movie) => movie.imdbID)
		.includes(selectedMovieId);

	const watchedUserRating = watched.find(
		(movie) => movie.imdbID === selectedMovieId
	)?.userRating;

	const countRef = useRef(0);

	function handleAdd() {
		const newWatchedMovie = {
			imdbID: movieDetail.imdbID,
			Title: movieDetail.Title,
			Year: movieDetail.Year,
			Poster: movieDetail.Poster,
			imdbRating: Number(movieDetail.imdbRating),
			Runtime: Number(movieDetail.Runtime.split(" ").at(0)),
			userRating,
			countRatingDecision: countRef,
		};
		onAddWatched(newWatchedMovie);
		onClose();
	}

	useEffect(
		function () {
			if (userRating) {
				countRef.current++;
			}
		},
		[userRating]
	);

	useEffect(
		function () {
			async function fetchMovieDetails() {
				setIsLoading(true);
				const res = await fetch(
					`http://www.omdbapi.com/?apikey=${APIKEY}&i=${selectedMovieId}`
				);
				const data = await res.json();
				setMovieDetail(data);
				setIsLoading(false);
			}
			fetchMovieDetails();
		},
		[selectedMovieId, APIKEY]
	);

	useEffect(
		function () {
			if (!movieDetail.Title) return;
			document.title = `Movie | ${movieDetail.Title}`;
			return function () {
				document.title = "usePOPCORN";
			};
		},
		[movieDetail.Title]
	);

	return (
		<div className='details'>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<header>
						<button className='btn-back' onClick={onClose}>
							&larr;
						</button>
						<img src={movieDetail.Poster} alt={`${movieDetail.Title} poster`} />
						<div className='details-overview'>
							<h2>{movieDetail.Title}</h2>
							<p>
								{movieDetail.Released} &bull; {movieDetail.Runtime}
							</p>
							<p>{movieDetail.Genre}</p>
							<p>
								<span>⭐️</span>
								{movieDetail.imdbRating} IMDb rating
							</p>
						</div>
					</header>
					<section>
						<div className='rating'>
							{!isWatched ? (
								<>
									<RatingStars
										maxStars={10}
										size={24}
										color='#f3ce13'
										onSetRating={setUserRating}
									/>
									{userRating && (
										<button className='btn-add' onClick={handleAdd}>
											+ Add to List
										</button>
									)}
								</>
							) : (
								<p>
									You already rated this movie {watchedUserRating}
									<span> ⭐️</span>
								</p>
							)}
						</div>
						<p>{movieDetail.Plot}</p>
						<p>Starring {movieDetail.Actors}</p>
						<p>Directed by {movieDetail.Director}</p>
					</section>
				</>
			)}
		</div>
	);
}

export default MovieDetails;
