class NewsletterForm extends React.Component {
  // v1 fara constructor - o sa ruleze constructorul lui React.Component deci
  state = {
    email: '',
    inputMessage: '',
  };

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // "handleSubmit" il intalnesti sau onSubmit
  onSubmit = (event) => {
    event.preventDefault();

    const email = this.state.email;

    if (!this.validateEmail(email)) {
      this.setState({
        inputMessage: 'Please use a valid email',
      });

      return;
    }

    setTimeout(() => {
      alert(`hello ${email}`);
    }, 2500);
  }; // asta o sa fie callback-ul

  onInputChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-newsletter container">
        <label htmlFor="field-newsletter">
          Subscribe to our <span>newsletter</span>
        </label>

        <div>
          <input
            type="text"
            name="field-newsletter"
            id="field-newsletter"
            value={this.state.email}
            onChange={this.onInputChange}
            placeholder="enter your email address to receive the latest news!"
          ></input>

          {this.state.inputMessage.length > 0 ? (
            <div className="message">{this.state.inputMessage}</div>
          ) : null}
        </div>

        <button type="submit" title="Subscribe">
          Subscribe
        </button>
      </form>
    );
  }
}

// class => className
// for devine => htmlFor
const newsletterContainer = document.querySelector('.home-newsletter');
ReactDOM.render(<NewsletterForm></NewsletterForm>, newsletterContainer);
