import styles from './Movies.module.css';
import { Movie } from '../Movie/Movie';
import { StateContext } from '../../services/Context';
import { useContext } from 'react';

function Movies() {
	const { movies } = useContext(StateContext);

	return (
		<div>
			<div className={styles.movies}>
				{movies.length ? (
					movies.map((movie) => {
						return <Movie key={movie.filmId} {...movie} />;
					})
				) : (
					<p className={styles.nothing}> Nothing found </p>
				)}
			</div>
		</div>
	);
}

export { Movies };
