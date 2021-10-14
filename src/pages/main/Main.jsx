import React, { useContext, useEffect } from 'react';
import { Movies } from '../../components/Movies/Movies';
import { Preloader } from '../../components/Preloader/Preloader';
import './Main.css';
import { getTop100 } from '../../services/API';

import { StateContext } from '../../services/Context';
import { Sidebar } from '../../layout/sidebar/Sidebar';

function Main() {
	const { getMovies, loading, getFilm, getPages } = useContext(StateContext);

	useEffect(() => {
		getTop100()
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
					<Movies />
				</>
			)}
		</>
	);
}

export { Main };
