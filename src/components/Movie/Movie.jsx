import { Link } from 'react-router-dom';
import styles from './Movie.module.css';
import cn from 'classnames';

function Movie(props) {
	const { nameRu: title, year, filmId: id, rating, posterUrl: poster } = props;

	return (
		<Link to={`/film/${id}`}>
			<div id={id} className={styles.movie}>
				<div>
					<img src={poster} alt={title} />
				</div>
				<div className={styles.content}>
					<span className={styles.title}>
						{title !== undefined && title.length > 30
							? title.slice(0, 25) + '...'
							: title}
					</span>
					<p>
						{year}{' '}
						<span
							className={cn(styles.rate, {
								[styles.high]: rating >= 7,
								[styles.middle]: rating >= 5 && rating < 7,
								[styles.low]: rating < 5,
								[styles.await]: rating.includes('%'),
							})}
						>
							{rating !== 'null'
								? rating.includes('%')
									? `Ожидает ${rating}`
									: rating
								: null}
						</span>
					</p>
				</div>
			</div>
		</Link>
	);
}

export { Movie };
