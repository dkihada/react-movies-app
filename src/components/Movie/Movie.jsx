import "./Movie.css";

function Movie(props) {
  const { nameRu: title, year, filmId: id, rating, posterUrl: poster } = props;

  return (
    <div id={id} className='card movie'>
      <div className='card-image waves-effect waves-block waves-light'>
        <img className='activator' src={poster} alt={title} />
      </div>
      <div className='card-content'>
        <span className='card-title activator white-text text-darken-4'>
          {title}
        </span>
        <p className='yellow-text'>
          {year} <span className='right'>{rating}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
