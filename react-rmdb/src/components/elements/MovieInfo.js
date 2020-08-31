import React from 'react';

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
		</div>
	</StyledMovieInfo>
)


export default MovieInfo;