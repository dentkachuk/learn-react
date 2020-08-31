import React from 'react';
import PropTypes from 'prop-types';

import NoImage from '../images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

import MovieThumb from './MovieThumb';

import { StyledMovieInfo } from '../styles/StyledMovieInfo';

const MovieInfo = ({movieData}) => (
	<StyledMovieInfo backdrop={movieData.backdrop_path}>
		<div className="movieinfo-content">
			<div className="movieinfo-thumb">
				<MovieThumb
					image={movieData.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movieData.poster_path}` : NoImage}
					clickable={false}
				/>
			</div>
			<div className="movieinfo-text">
				<h1>{movieData.title}</h1>
				<h3>PLOT</h3>
				<p>{movieData.overview}</p>

				<div className="rating-director">
					<div>
						<h3>IMDB RATING</h3>
						<div className="score">{movieData.vote_average}</div>
					</div>
					<div className="director">
						<h3>DIRECTOR{movieData.directors.lenght > 1 ? 'S' : ''}</h3>
						{movieData.directors.map(element => (
							<p key={element.credit_id}>{element.name}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	</StyledMovieInfo>
)

MovieInfo.propTypes = {
	movieData: PropTypes.object
}

export default MovieInfo;
