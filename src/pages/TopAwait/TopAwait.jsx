import React, { useContext, useEffect } from 'react';
import { Movies } from '../../components/Movies/Movies';
import { Preloader } from '../../components/Preloader/Preloader';
// import './TopAwait.css';
import { getTopMovies } from '../../services/API';

import { StateContext } from '../../services/Context';
import { Sidebar } from '../../layout/sidebar/Sidebar';
import { Pagination } from '../../components/Pagination/Pagination';

function TopAwait() {
	const { getMovies, loading, getFilm, getPages, type } =
		useContext(StateContext);

	useEffect(() => {
		getTopMovies(type._top_await)
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
			{loading ? (
				<Preloader />
			) : (
				<>
					<div className='sidebar'>
						<Sidebar />
					</div>
					<div>
						<Movies />
						<Pagination typeMovies={type._top_await} />
					</div>
				</>
			)}
		</>
	);
}

export { TopAwait };
