import './Menu.css';
import { getTop100, getTop250, getTopAwait } from '../../services/API';
import { useContext } from 'react';
import { StateContext } from '../../services/Context';

function Menu() {
	const { getMovies } = useContext(StateContext);

	const getMovie250 = () => {
		getTop250()
			.then((data) => {
				getMovies(data.films);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getMovie100 = (page = 1) => {
		getTop100(page)
			.then((data) => {
				getMovies(data.films);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getMovieAwait = () => {
		getTopAwait()
			.then((data) => {
				getMovies(data.films);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<ul className='menu-list'>
			<li onClick={getMovieAwait}>Ожидаемые фильмы</li>
			<li onClick={() => getMovie100()}>Популярные фильмы</li>
			<li onClick={() => getMovie250()}>ТОП 250 Фильмов</li>
		</ul>
	);
}

export { Menu };
