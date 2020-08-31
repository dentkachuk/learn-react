import React from 'react';

// Componnets
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

// Hooks
import { useMovieFetch } from './hooks/useMovieFetch';

const Movie = ({ movieId }) => {
	const [movieData, loading, error] = useMovieFetch(movieId);
	console.log(movieData);

	if (error) return <div>Something went wrong ...</div>
	if (loading) return <Spinner />

	return (
		<>
			<Navigation title={movieData.original_title}/>
			<MovieInfo movieData={movieData}/>
			<MovieInfoBar />
			<Grid>
				<Actor />
			</Grid>
		</>
	)
}

export default Movie;