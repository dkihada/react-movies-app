import './Footer.css';

function Footer() {
	return (
		<footer className='page-footer'>
			<div>© {new Date().getFullYear()} Copyright Text</div>
			<a
				href='https://github.com/dkihada/my_pet_project/tree/main/react/movies-project'
				target='_blank'
				rel='noreferrer'
			>
				GitHub Repo
			</a>
		</footer>
	);
}

export { Footer };
