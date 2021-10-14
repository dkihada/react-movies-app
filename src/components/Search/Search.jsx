import React, { useContext, useState } from 'react';
import './Search.css';

import { searchList } from '../../services/API';
import { StateContext } from '../../services/Context';

function Search() {
	const { getMovies } = useContext(StateContext);

	const [search, setSearch] = useState('');

	const handleKey = (e) => {
		if (e.key === 'Enter') {
			searchMovie(search);
		}
	};

	const searchMovie = (str) => {
		searchList(str)
			.then((data) => {
				getMovies(data.films);
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
					onChange={(e) => setSearch(e.target.value)}
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
