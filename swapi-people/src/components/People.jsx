import { Component } from 'react';

class People extends Component {
  renderPeople() {
    if (this.props.people.length <= 0) {
      return <p>No people found</p>;
    }

    return this.props.people.map((person) => {
      const { name } = person;

      return (
        <article className="col-6 col-md-3 p-4 mb-2 d-flex flex-column">
          <header>
            <h5 className="text-warning text-left">{name}</h5>
          </header>

          <section className="d-flex justify-content-between">
            <button
              className="btn btn-sm btn-light"
              type="button"
              title={`Learn more about ${name}`}
            >
              Details
            </button>
          </section>
        </article>
      );
    });
  }

  render() {
    return <section className="row">{this.renderPeople()}</section>;
  }
}

export default People;
