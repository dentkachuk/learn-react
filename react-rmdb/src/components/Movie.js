import React from 'react';
import PropTypes from 'prop-types';

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

	if (error) return <div>Something went wrong ...</div>
	if (loading) return <Spinner />

	return (
		<>
			<Navigation title={movieData.original_title}/>
			<MovieInfo movieData={movieData}/>
			<MovieInfoBar time={movieData.runtime}
						  budget={movieData.budget}
						  revenue={movieData.revenue}/>
			<Grid header="Actors">
				{movieData.actors.map(actor => (
					<Actor key={actor.credit_id} actor={actor} />
				))}
			</Grid>
		</>
	)
}

Movie.propTypes = {
	movieId: PropTypes.string
}

export default Movie;
