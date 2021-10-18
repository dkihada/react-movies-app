import React, { useContext } from 'react';
import './Search.css';

import { searchList } from '../../services/API';
import { StateContext } from '../../services/Context';

function Search() {
	const { getMovies, getPages, getSearch, search } = useContext(StateContext);

	const handleKey = (e) => {
		if (e.key === 'Enter') {
			searchMovie(search);
		}
	};

	const searchMovie = (str) => {
		searchList(str)
			.then((data) => {
				getMovies(data.films);
				getPages(data.pagesCount);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className='search'>
			<div className='input-field'>
				<input
					placeholder='Введите для поиска'
					type='search'
					value={search}
					onChange={(e) => getSearch(e.target.value)}
					onKeyDown={handleKey}
					checked
				/>
				<button
					className='search-btn'
					onClick={() => {
						searchMovie(search);
					}}
				>
					Поиск
				</button>
			</div>
		</div>
	);
}

export { Search };
