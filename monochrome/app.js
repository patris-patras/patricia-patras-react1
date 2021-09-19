class NewsletterForm extends React.Component {
  state = {
    email: 'test',
    inputMessage: '',
    submitted: false,
    submittedValue: '',
  };

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        action=""
        method="post"
        className="form-newsletter"
      >
        <label htmlFor="email-newsletter">sign up for our newsletter</label>
        <input type="email" name="email" id="email-newsletter"></input>
        <button type="submit">SUMBIT</button>
      </form>
    );
  }
}

const newsletterContainer = document.querySelector(
  '.footer-sign-up-newsletter',
);
ReactDOM.render(<NewsletterForm></NewsletterForm>, newsletterContainer);
