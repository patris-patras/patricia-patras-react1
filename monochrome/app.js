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

class AddToCartButton extends React.Component {
  state = {
    added: false,
    busy: false,
  };

  onClick = () => {
    if (this.state.busy === true) {
      return;
    }

    this.setState({
      busy: true,
    });

    setTimeout(() => {
      dispatchEvent(
        new CustomEvent('cart:add', {
          detail: this.props.productId,
        }),
      );

      this.setState({
        busy: false,
        added: !this.state.added,
      });
    }, 500);
  };

  render() {
    return (
      <button
        className={`product-control ${
          this.state.added === true ? 'active' : ''
        } ${this.state.busy === true ? 'busy' : ''}`}
        type="button"
        title={this.state.added === true ? 'remove from cart' : 'add to cart'}
        onClick={this.onClick}
      >
        <span>
          {this.state.added === true ? (
            <i className="far fa-minus-square" />
          ) : (
            <i className="far fa-plus-square" />
          )}
        </span>
      </button>
    );
  }
}

class AddToWishlistButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      added: false,
      busy: false,
    };
  }

  onClick = () => {
    this.setState({
      busy: true,
    });

    setTimeout(() => {
      this.setState({
        busy: false,
        added: !this.state.added,
      });
    }, 500);
  };

  render() {
    var { added, busy } = this.state;
    var className =
      'product-control' +
      ' ' +
      (added ? 'active' : '') +
      ' ' +
      (busy ? 'busy' : '');

    return (
      <button
        className={className}
        type="button"
        onClick={this.onClick}
        title={added === true ? 'remove from Wishlist' : 'add to Wishlist'}
        disabled={busy}
      >
        <span>
          <i className={added === true ? 'fas fa-heart' : 'far fa-heart'} />
        </span>
      </button>
    );
  }
}

class ProductControls extends React.Component {
  render() {
    const productId = this.props.productId;

    return [
      <AddToCartButton key="321" productId={productId}></AddToCartButton>,
      <AddToWishlistButton
        key="123"
        productId={productId}
      ></AddToWishlistButton>,
    ];
  }
}

const productTileControls = document.querySelectorAll('.product-tile-controls');
productTileControls.forEach((productTileControl, index) => {
  ReactDOM.render(
    <ProductControls key={index} productId={index}></ProductControls>,
    productTileControl,
  );
});
