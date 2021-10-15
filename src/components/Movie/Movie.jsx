import { Link } from 'react-router-dom';
import './Movie.css';
import cn from 'classnames';

function Movie(props) {
	const { nameRu: title, year, filmId: id, rating, posterUrl: poster } = props;

	return (
		<Link to={`/film/${id}`}>
			<div id={id} className='card movie'>
				<div className='card-image'>
					<img src={poster} alt={title} />
				</div>
				<div className='card-content'>
					<span className='card-title'>
						{title !== undefined && title.length > 30
							? title.slice(0, 25) + '...'
							: title}
					</span>
					<p>
						{year}{' '}
						<span
							className={cn('movie__rate', {
								rate_high: rating >= 7,
								rate_middle: rating >= 5 && rating < 7,
								rate_low: rating < 5,
								rate_await: rating.includes('%'),
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
