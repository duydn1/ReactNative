import React from 'react';
import getMovieTopRated from '../api/getMovieTopRated';
import MovieList from '../component/Movie/MovieList';

export interface Props {}
const MovieTopRatedScreen: React.FC<Props> = () => {
  const {isLoading, result} = getMovieTopRated();
  return <MovieList loading={isLoading} data={result?.results ?? []} />;
};

export default MovieTopRatedScreen;