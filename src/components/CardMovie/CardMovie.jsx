import { useContext } from 'react';
import { StateContext } from '../../services/Context';
import styles from './CardMovie.module.css';
import { Tag } from '../Tag/Tag';

function CardMovie() {
	const { film } = useContext(StateContext);

	return (
		<div className={styles.card}>
			<img src={film.posterUrlPreview} alt={film.nameRu} />
			<div className={styles.body}>
				<h2>
					{film.nameRu} ({film.year})
				</h2>
				<div className={styles.original_name}>
					{film.nameOriginal}{' '}
					<span>
						{film.ratingAgeLimits ? (
							<Tag>
								{film.ratingAgeLimits && film.ratingAgeLimits.slice(3) + '+'}
							</Tag>
						) : null}
					</span>
				</div>
				<div className={styles.slogan}>{film.slogan && film.slogan}</div>
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
				<div>
					{' '}
					<a
						href={film.webUrl}
						target='_blank'
						rel='noreferrer'
						className={styles.link_kinopoisk}
					>
						Смотреть на Кинопоиск
					</a>
				</div>
			</div>
			{/* {trailer
				? trailer.map((vid) => (
						<iframe
							frameborder='none'
							width='550px'
							height='300px'
							title={trailer.name}
							src={`https://www.youtube.com/embed/${vid.url.slice(-11)}`}
							key={vid.name}
						></iframe>
				  ))
				: null} */}
		</div>
	);
}

export { CardMovie };
