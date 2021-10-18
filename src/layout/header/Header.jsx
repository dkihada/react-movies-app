import './Header.css';

function Header() {
	return (
		<ul className='nav'>
			<li>
				<a href='https://github.com/dkihada' target='_blank' rel='noreferrer'>
					GitHub Profile
				</a>
			</li>
			<li>
				<a
					href='https://github.com/dkihada/react-movies-app'
					target='_blank'
					rel='noreferrer'
				>
					GitHub REPO
				</a>
			</li>
		</ul>
	);
}

export { Header };
