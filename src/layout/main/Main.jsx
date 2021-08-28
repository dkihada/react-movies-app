import React from "react";
import { Movies } from "../../components/Movies/Movies";
import { Preloader } from "../../components/Preloader/Preloader";
import { Search } from "../../components/Search/Search";
import "./Main.css";

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
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
      .then((data) => this.setState({ movies: data.films, loading: false }))
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  searchMovie = (str) => {
    this.setState({ loading: true });

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
        this.setState({ movies: data.films, loading: false });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className='container content'>
        <Search searchMovie={this.searchMovie} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export { Main };
