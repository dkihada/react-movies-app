import { Menu } from '../../components/Menu/Menu';
import { Search } from '../../components/Search/Search';
import { Logo } from '../../components/Logo/Logo';

function Sidebar() {
	return (
		<div className='sidebar'>
			<div>
				<Logo />
				<Search />
				<Menu />
			</div>
		</div>
	);
}

export { Sidebar };
