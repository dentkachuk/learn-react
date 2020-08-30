import React, { useState } from 'react';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, API_URL, API_KEY } from '../config';

// import Components 
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

// Custom Hook
import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {
	const [
		{
			state: { movies, currentPage, totalPages, heroImage },
			loading,
			error
		}, fetchMovies
	] = useHomeFetch();
	const [searchTerm, setSearchTerm] = useState('');

	if (error) return <div>Something went wrong ...</div>
	if(!movies[0]) return <Spinner />

	const loadMoreMovies = () => {
		const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage + 1}`;
		const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${currentPage + 1}`;

		const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

		fetchMovies(endpoint);
	}

	return (<>
		<HeroImage
			image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
			title={heroImage.original_title}
			text={heroImage.overview}/>
		<SearchBar />
		<Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
			{
				movies.map(movie => (
					<MovieThumb key={movie.id}
								clickable
								movieId={movie.id}
								movieName={movie.original_title}
								image={movie.poster_path
									? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`
									: NoImage } />
				))
			}
		</Grid>
		{loading && <Spinner />}
		{currentPage < totalPages && !loading && (
			<LoadMoreBtn text="Load more" callback={loadMoreMovies} />
		)}
	</>)
}

export default Home;
