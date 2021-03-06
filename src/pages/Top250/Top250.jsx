import { useContext, useEffect } from 'react';
import { Movies } from '../../components/Movies/Movies';
import { Pagination } from '../../components/Pagination/Pagination';
import { Sidebar } from '../../layout/sidebar/Sidebar';
import { getTopMovies } from '../../services/API';
import { StateContext } from '../../services/Context';
import './Top250.css';

function Top250() {
	const { type, getMovies, getPages, getFilm } = useContext(StateContext);

	useEffect(() => {
		getTopMovies(type._top_250)
			.then((data) => {
				getMovies(data.films);
				getPages(data.pagesCount);
				getFilm([]);
			})
			.catch((err) => {
				console.log(err);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div className='sidebar'>
				<Sidebar />
			</div>
			<div>
				<Movies />
				<Pagination typeMovies={type._top_250} />
			</div>
		</>
	);
}

export { Top250 };
