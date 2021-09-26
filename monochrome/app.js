class NewsletterForm extends React.Component {
  state = {
    email: '',
    inputMessage: '',
    submitted: false,
    submittedValue: '',
    busy: false,
  };

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  onSubmit = (event) => {
    event.preventDefault();

    const email = this.state.email;

    if (!this.validateEmail(email)) {
      this.setState({
        inputMessage: 'email address not valid!',
      });

      return;
    }

    this.setState({
      busy: true,
    });

    setTimeout(() => {
      alert(`hi ${email}`);

      this.setState({
        busy: false,
        email: '',
        submittedValue: this.state.email,
        submitted: true,
      });
    }, 1500);
  };

  onInputChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <div>
        {this.state.submitted === true ? (
          <div className="container thank-you-message">
            {' '}
            Thank you, {this.state.submittedValue}!
          </div>
        ) : (
          <form onSubmit={this.onSubmit} className="form-newsletter">
            <label htmlFor="email-newsletter">
              Sign up for our newsletter!
            </label>

            <div>
              <input
                type="text"
                name="email-newsletter"
                id="email-newsletter"
                placeholder="email address"
                value={this.state.email}
                onChange={this.onInputChange}
              ></input>

              {this.state.inputMessage.length > 0 ? (
                <div className="message">{this.state.inputMessage}</div>
              ) : null}
            </div>

            <button
              type="submit"
              title="Subscribe"
              disabled={this.state.busy}
              className={`${this.state.busy === true ? 'busy' : ''}`}
            >
              {this.state.busy ? (
                <i className="fas fa-spinner icon"></i>
              ) : (
                'subscribe'
              )}
            </button>
          </form>
        )}
      </div>
    );
  }
}

const newsletterContainer = document.querySelector(
  '.footer-sign-up-newsletter',
);
ReactDOM.render(<NewsletterForm></NewsletterForm>, newsletterContainer);
