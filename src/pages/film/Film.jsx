import './Film.css';
import { StateContext } from '../../services/Context';
import { useContext, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Preloader } from '../../components/Preloader/Preloader';
import { CardMovie } from '../../components/CardMovie/CardMovie';

import { getFilmInfo, getTrailer } from '../../services/API';

function Film() {
	const { loading, getFilm, getTrailerLink, film } = useContext(StateContext);
	const { pathname } = useLocation();
	const { goBack } = useHistory();

	const regExpId = /(\d+)/g;

	useEffect(() => {
		getFilmInfo(pathname.match(regExpId))
			.then((data) => {
				getFilm(data);
			})
			.catch((err) => {
				console.log(err);
			});

		getTrailer(pathname.match(regExpId))
			.then((data) => {
				getTrailerLink(data.items.filter((q) => q.site === 'YOUTUBE'));
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
					<div>
						<div className='sidebar back' onClick={goBack}>
							{' '}
							Назад
						</div>
					</div>
					{film ? <CardMovie /> : <Preloader />}
				</>
			)}
		</>
	);
}

export { Film };
