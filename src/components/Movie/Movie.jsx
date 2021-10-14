import { Link } from 'react-router-dom';
import './Movie.css';

function Movie(props) {
	const { nameRu: title, year, filmId: id, rating, posterUrl: poster } = props;

	return (
		<Link to={`/film/${id}`}>
			<div id={id} className='card movie'>
				<div className='card-image waves-effect waves-block waves-light'>
					<img className='activator' src={poster} alt={title} />
				</div>
				<div className='card-content'>
					<span className='card-title'>
						{title !== undefined && title.length > 30
							? title.slice(0, 25) + '...'
							: title}
					</span>
					<p>
						{year} <span className='right'>{rating}</span>
					</p>
				</div>
			</div>
		</Link>
	);
}

export { Movie };
