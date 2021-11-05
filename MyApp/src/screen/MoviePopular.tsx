import React, {useEffect, useState} from 'react';
import getMoviePopular from '../api/getMoviePopular';
import MovieList from '../component/Movie/MovieList';
import { RootObject } from '../modal/Movie';

export interface Props {}

const MoviePopularScreen: React.FC<Props> = () => {

  // const [isLoading, setLoading] = useState(false);
  // const [result, setResult] = useState<RootObject>();
  // useEffect(() => {
  //   setLoading(true);
  //   fetch(
  //     'https://api.themoviedb.org/3/movie/popular?api_key=6517830aa16f5a1c1e459d4de84e9622&language=en-US&page=1',
  //   )
  //     .then(response => response.json())
  //     .then(json => setResult(json))
  //     .finally(() => setLoading(false));
  // }, []);
  // console.log('postJson', result);
  // return <MovieList loading={isLoading} data={result?.results ?? []} />;

  // Tách riêng ra thành file api/getMoviePopular.ts
  const {isLoading, result} = getMoviePopular();
  return <MovieList loading={isLoading} data={result?.results ?? []} />;
};

export default MoviePopularScreen;