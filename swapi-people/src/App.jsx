import { Component, Fragment } from 'react';
import Search from './components/Search';
import People from './components/People';
import Person from './components/Person';

const baseUrl = 'https://swapi.dev/api/people';

class App extends Component {
  state = {
    people: [],
    busy: true,
    errorMessage: '',
    hasSearchResults: false,
    selectedPerson: null,
  };

  getPeople() {
    this.setState({
      busy: true,
    });

    return fetch(baseUrl)
      .then((response) => {
        if (response.status === 404) {
          throw new Error('404');
        }

        return response.json();
      })
      .then(({ results }) => {
        this.setState({
          films: results,
          busy: false,
        });
      })
      .catch((_) => {
        this.setState({
          errorMessage: 'An error occured.',
          busy: false,
        });
      });
  }

  clearSearchResults() {
    this.getPeople().then(() => {
      this.setState({
        hasSearchResults: false,
      });
    });
  }

  renderPeople() {
    return (
      <>
        <h2>Characters</h2>

        <People
          people={this.state.people}
          selectPerson={(person) => {
            this.setState({
              selectedPerson: person,
            });
          }}
        ></People>

        {this.state.hasSearchResults ? (
          <button
            className="btn btn-warning text-white"
            title="See all characters"
            type="button"
            onClick={() => {
              this.clearSearchResults();
            }}
          >
            See all characters
          </button>
        ) : (
          <></>
        )}
      </>
    );
  }

  renderPerson() {
    return (
      <Person
        person={this.state.selectedPerson}
        deselectPerson={() => {
          this.setState({
            selectedPerson: null,
          });
        }}
      ></Person>
    );
  }

  renderMainScreen() {
    if (this.state.busy) {
      return <>...loading</>;
    }
    if (this.state.busy === false && this.state.errorMessage.length > 0) {
      return <>{this.state.errorMessage}</>;
    }

    return this.state.selectedPerson !== null
      ? this.renderPerson()
      : this.renderPeople();
  }

  componentDidMount() {
    this.getPeople();
  }

  render() {
    return (
      <Fragment>
        <header className="navbar-expand-md navbar-dark fixed-top bg-dark">
          <nav className="container d-flex justify-content-between">
            <h1 className="display-6 text-warning">Swapi Characters</h1>

            <Search
              onSearchResults={(people) => {
                this.setState({
                  people,
                  hasSearchResults: true,
                });
              }}
              placeholder="Search for someone"
            ></Search>
          </nav>
        </header>

        <main className="container mt-5 pt-5">{this.renderMainScreen()}</main>
      </Fragment>
    );
  }
}

export default App;
