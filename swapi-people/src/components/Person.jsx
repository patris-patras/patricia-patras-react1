import { Component } from 'react';

class Person extends Component {
  render() {
    return (
      <article className="row">
        <div className="col-12 d-flex mb-4 justify-content-between align-items-center">
          <h2>{this.props.person.name}</h2>

          <button
            className="btn btn-outline-light align-self-center"
            title="Back"
            type="button"
            onClick={() => {
              this.props.deselectPerson();
            }}
          >
            Back
          </button>
        </div>

        <div className="col-12 col-md-8 mt-4 mt-md-0">
          <h3 className="mb-4">Details</h3>

          <table className="table table-striped table-dark">
            <tbody>
              <tr>
                <th>Character:</th>
                <th>{this.props.person.name}</th>
              </tr>
              <tr>
                <td>Gender: {this.props.person.gender}</td>
                <td>Birth year: {this.props.person.birth_year}</td>
              </tr>
              <tr>
                <td>Height: {this.props.person.height}</td>
                <td>Mass: {this.props.person.mass}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    );
  }
}

export default Person;
