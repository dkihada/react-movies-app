import React, { useState } from "react";
import "./Seacrh.css";

function Search(props) {
  const { searchMovie } = props;

  const [search, setSearch] = useState();

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovie(search);
    }
  };

  return (
    <div className='row'>
      <div className='input-field'>
        <input
          placeholder='Search movies...'
          type='search'
          className='validate'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
          checked
        />
        <button
          className='btn blue-grey search-btn'
          onClick={() => {
            searchMovie(search);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export { Search };
