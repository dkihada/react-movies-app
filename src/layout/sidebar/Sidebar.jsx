import { Menu } from '../../components/Menu/Menu';
import { Search } from '../../components/Search/Search';

function Sidebar({ searchMovie, getMovie250, getMovie100, setMovies }) {
	return (
		<div className='sidebar'>
			<div>
				<Search />
				<Menu getMovie250={getMovie250} getMovie100={getMovie100} />
			</div>
		</div>
	);
}

export { Sidebar };
