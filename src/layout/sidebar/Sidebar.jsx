import { Menu } from '../../components/Menu/Menu';
import { Search } from '../../components/Search/Search';

function Sidebar() {
	return (
		<div className='sidebar'>
			<div>
				<Search />
				<Menu />
			</div>
		</div>
	);
}

export { Sidebar };
