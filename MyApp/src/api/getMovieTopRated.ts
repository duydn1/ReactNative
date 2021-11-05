import {useEffect, useState} from 'react';
import { RootObject } from '../modal/Movie';


const getMovieTopRated = () => {
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState<RootObject>();
  useEffect(() => {
    setLoading(true);
    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=6517830aa16f5a1c1e459d4de84e9622&language=en-US&page=1',
    )
      .then(response => response.json())
      .then(json => setResult(json))
      .finally(() => setLoading(false));
  }, []);
  console.log('postJson', result);
  return {isLoading, result};
};

export default getMovieTopRated;