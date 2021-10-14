import { useContext } from 'react';
import { StateContext } from '../../services/Context';
import './CardMovie.css';
import { Tag } from '../Tag/Tag';

function CardMovie() {
	const { film, trailer } = useContext(StateContext);

	return (
		<div className='card-movie'>
			<img src={film.posterUrlPreview} alt={film.nameRu} />
			<div className='card-movie__body'>
				<h2>
					{film.nameRu} ({film.year})
				</h2>
				<div className='card-movie__original-name'>
					{film.nameOriginal}{' '}
					<span>
						{film.ratingAgeLimits ? (
							<Tag>
								{film.ratingAgeLimits && film.ratingAgeLimits.slice(3) + '+'}
							</Tag>
						) : null}
					</span>
				</div>
				<div className='card-movie__slogan'>{film.slogan && film.slogan}</div>
				<div>
					Страна:
					{film.countries &&
						film.countries.map((country) => (
							<span key={country.country}> {country.country} </span>
						))}
				</div>
				<div>
					Жанр:
					{film.genres &&
						film.genres.map((g) => <span key={g.genre}> {g.genre} </span>)}
				</div>
				<span>Длительность: {film.filmLength} мин.</span>
				<p>
					Описание: <br />
					<br />
					{film.description}
				</p>
				<div></div>
			</div>
			{/* {trailer.url ? (
				<iframe
					width='550px'
					height='300px'
					title={trailer.name}
					src={trailer.url}
				>
					{trailer.name}
				</iframe>
			) : null} */}
		</div>
	);
}

export { CardMovie };
