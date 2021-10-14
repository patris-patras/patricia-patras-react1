import { Component } from 'react';

const baseUrl = 'https://swapi.dev/api/films';

class Search extends Component {
  state = {
    busy: false,
    searchTerm: '',
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.setState({
      busy: true,
    });

    fetch(`${baseUrl}?search=${this.state.searchTerm}`)
      .then((response) => {
        return response.json();
      })
      .then(({ results: films }) => {
        this.setState({
          busy: false,
          searchTerm: '',
        });

        this.props.onSearchResults(films);
      });
  };

  onInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    return (
      <form
        className="d-inline-flex align-self-center"
        onSubmit={this.onSubmit}
      >
        <input
          className="form-control me-2 align-self-center"
          type="text"
          name="q"
          placeholder={this.props.placeholder || 'Search...'}
          onChange={this.onInputChange}
          value={this.state.searchTerm}
          disabled={this.state.busy}
          required
        ></input>

        <button
          className="btn btn-outline-warning"
          type="submit"
          title="Search"
          disabled={this.state.busy}
        >
          Search
        </button>
      </form>
    );
  }
}

export default Search;
