import { useContext } from 'react';
import { getTopMovies } from '../../services/API';
import styles from './Pagination.module.css';
import { StateContext } from '../../services/Context';
import ReactPaginate from 'react-paginate';

function Pagination({ typeMovies }) {
	const { pages, getMovies } = useContext(StateContext);
	return (
		<ReactPaginate
			pageCount={pages}
			pageRangeDisplayed={1}
			marginPagesDisplayed={3}
			previousLabel={'<'}
			nextLabel={'>'}
			containerClassName={styles.pagination}
			activeClassName={styles.selected}
			pageClassName={styles.li}
			forcePage={0}
			onPageChange={(e) => {
				getTopMovies(typeMovies, e.selected + 1)
					.then((data) => {
						getMovies(data.films);
					})
					.catch((err) => {
						console.log(err);
					});
			}}
		/>
	);
}

export { Pagination };
