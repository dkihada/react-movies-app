import styles from './Menu.module.css';
import { getTopMovies } from '../../services/API';
import { useContext } from 'react';
import { StateContext } from '../../services/Context';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

function Menu() {
	const { getMovies, getPages, getSearch, type } = useContext(StateContext);

	const { pathname } = useLocation();

	const getMovie = (t) => {
		getTopMovies(t)
			.then((data) => {
				type._currentType = t;
				getSearch('');
				getMovies(data.films);
				getPages(data.pagesCount);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<ul className={styles.menu}>
			<Link
				to={`/${type._top_await}`}
				className={cn({
					active: `/${type._top_await}` == pathname,
				})}
			>
				<li onClick={() => getMovie(type._top_await)}>Ожидаемые фильмы</li>
			</Link>
			<Link
				to={`/${type._top_100}`}
				className={cn({
					active: `/${type._top_100}` == pathname,
				})}
			>
				<li onClick={() => getMovie(type._top_100)}>Популярные фильмы</li>
			</Link>
			<Link
				to={`/${type._top_250}`}
				className={cn({
					active: `/${type._top_250}` == pathname,
				})}
			>
				<li>ТОП 250 Фильмов</li>
			</Link>
		</ul>
	);
}

export { Menu };
