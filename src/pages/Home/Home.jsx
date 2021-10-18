import { useContext } from 'react';
import { Movies } from '../../components/Movies/Movies';
import { Preloader } from '../../components/Preloader/Preloader';
import { Sidebar } from '../../layout/sidebar/Sidebar';
import { StateContext } from '../../services/Context';
import styles from './Home.module.css';

function Home() {
	const { loading, search, movies } = useContext(StateContext);

	console.log();

	return (
		<>
			<div className='sidebar'>
				<Sidebar />
				{/* <Pagination typeMovies={type._top_100} /> */}
			</div>

			{movies.length && search ? (
				<>
					<Movies />
				</>
			) : (
				<div className={styles.body}>
					<h1>Добро пожаловать на MoviesHub! </h1>
					<p>
						Выберите из списка меню категорию фильмов или введите в поиске
						интересующий вас фильм.
					</p>
				</div>
			)}
		</>
	);
}

export { Home };
