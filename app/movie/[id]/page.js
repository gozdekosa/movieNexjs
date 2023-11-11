import HomeContainer from '@/containers/home'
import MovieContainer from '@/containers/movie'
import Movies from '@/mocks/movies.json'
import { notFound } from 'next/navigation';

export default function MoviePage({params, searchParams}) {
    const movieDetail = Movies.results.find((movie) => movie.id.toString() === params.id);

    if (movieDetail.success === false) {
        notFound();
      }

    if (searchParams.error === "true") {
        throw new Error("Something went wrong!");
    }
  
    return <MovieContainer movie={movieDetail} />
}
