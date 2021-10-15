import { Component, Fragment } from 'react';
import Search from './components/Search';
import People from './components/People';

const baseUrl = 'https://swapi.dev/api/people';

class App extends Component {
  state = {
    people: [],
    busy: true,
    errorMessage: '',
  };

  getPeople() {
    this.setState({
      busy: true,
    });

    fetch(baseUrl)
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

  renderPeople() {
    return (
      <>
        <h2>People</h2>

        <People people={this.state.people}></People>
      </>
    );
  }

  renderMainScreen() {
    if (this.state.busy) {
      return <>...loading</>;
    }
    if (this.state.busy === false && this.state.errorMessage.length > 0) {
      return <>{this.state.errorMessage}</>;
    }

    return this.renderPeople();
  }

  componentDidMount() {
    this.getPeople();
  }

  render() {
    return (
      <Fragment>
        <header className="navbar-expand-md navbar-dark fixed-top bg-dark">
          <nav className="container d-flex justify-content-between">
            <h1 className="display-6 text-warning">Swapi People</h1>

            <Search
              onSearchResults={(people) => {
                this.setState({
                  people,
                });
              }}
            ></Search>
          </nav>
        </header>

        <main className="container mt-5 pt-5">{this.renderMainScreen}</main>
      </Fragment>
    );
  }
}

export default App;
