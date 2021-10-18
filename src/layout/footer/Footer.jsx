import styles from './Footer.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
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
