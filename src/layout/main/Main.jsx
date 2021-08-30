import React, { useEffect, useState } from "react";
import { Movies } from "../../components/Movies/Movies";
import { Preloader } from "../../components/Preloader/Preloader";
import { Search } from "../../components/Search/Search";
import "./Main.css";

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovie = (str) => {
    setLoading(true);

    fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${str}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "4fa00bd4-9132-4722-b0d3-5ea6515ac863",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.films);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1",
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "4fa00bd4-9132-4722-b0d3-5ea6515ac863",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.films);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className='container content'>
      <Search searchMovie={searchMovie} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
}

export { Main };
