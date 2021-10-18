import { useContext } from 'react';
import { getTopMovies, searchList } from '../../services/API';
import styles from './Pagination.module.css';
import './Pagination.css';
import { StateContext } from '../../services/Context';
import ReactPaginate from 'react-paginate';

function Pagination({ typeMovies }) {
	const { pages, getMovies, search, getPages } = useContext(StateContext);
	return (
		<>
			{pages > 1 ? (
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
						!search
							? getTopMovies(typeMovies, e.selected + 1)
									.then((data) => {
										getMovies(data.films);
									})
									.catch((err) => {
										console.log(err);
									})
							: searchList(search, e.selected + 1)
									.then((data) => {
										getMovies(data.films);
										getPages(data.pagesCount);
									})
									.catch((err) => {
										console.log(err);
									});
					}}
				/>
			) : null}
		</>
	);
}

export { Pagination };
