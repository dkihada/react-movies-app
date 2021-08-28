import React from "react";
import "./Seacrh.css";

class Search extends React.Component {
  state = {
    search: "",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search);
    }
  };

  render() {
    return (
      <div className='row'>
        <div className='input-field'>
          <input
            placeholder='Search movies...'
            type='search'
            className='validate'
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
            checked
          />
          <button
            className='btn blue-grey search-btn'
            onClick={() => {
              this.props.searchMovie(this.state.search);
            }}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export { Search };
