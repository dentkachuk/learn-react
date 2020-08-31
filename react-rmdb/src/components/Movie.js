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
			<MovieInfoBar time={movieData.runtime}
						  revenue={movieData.revenue}
						  budget={movieData.budget}/>
			<Grid header="Actors">
				{movieData.actors.map(actor => (
					<Actor key={actor.credit_id} actor={actor} />
				))}
			</Grid>
		</>
	)
}

export default Movie;
