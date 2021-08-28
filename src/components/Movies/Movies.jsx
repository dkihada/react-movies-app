import "./Movies.css";
import { Movie } from "../Movie/Movie";

function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className='movies'>
      {movies.length ? (
        movies.map((movie) => {
          return <Movie key={movie.filmId} {...movie} />;
        })
      ) : (
        <p className='white-text'> Nothing found </p>
      )}
    </div>
  );
}

export { Movies };
