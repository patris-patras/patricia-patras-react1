class NewsletterForm extends React.Component {
  // v1 fara constructor - o sa ruleze constructorul lui React.Component deci
  state = {
    email: '',
    inputMessage: '',
    busy: false,
    submitted: false,
    submittedValue: '',
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

    this.setState({
      busy: true,
    });

    setTimeout(() => {
      alert(`hello ${email}`);

      this.setState({
        busy: false,
        email: '',
        submittedValue: this.state.email,
        submitted: true,
      });
    }, 2000);
  }; // asta o sa fie callback-ul

  onInputChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <div>
        {this.state.submitted === true ? (
          <div className="container">
            Hello {this.state.submittedValue}, thank you!
          </div>
        ) : (
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

            <button
              type="submit"
              title="Subscribe"
              disabled={this.state.busy}
              className={`${this.state.busy === true ? 'busy' : ''}`}
            >
              {this.state.busy ? (
                <i className="fas fa-spinner icon"></i>
              ) : (
                'Subsribe'
              )}
            </button>
          </form>
        )}
      </div>
    );
  }
}

// class => className, for devine => htmlFor
const newsletterContainer = document.querySelector('.home-newsletter');
ReactDOM.render(<NewsletterForm></NewsletterForm>, newsletterContainer);

class AddToCartButton extends React.Component {
  // v1
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
    }, 1000);
  };

  render() {
    return (
      <button
        className={`product-control ${
          this.state.added === true ? 'active' : ''
        } ${this.state.busy === true ? 'busy' : ''}`}
        type="button"
        title={this.state.added === true ? 'Remove from Cart' : 'Add to Cart'}
        onClick={this.onClick}
      >
        <span>
          {this.state.added === true
            ? `PID: ${this.props.productId} in cart`
            : 'Add to cart'}
        </span>
        <i className="fas fa-spinner icon"></i>
      </button>
    );
  }
}

class AddToWishlistButton extends React.Component {
  // v2 cu constructor
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
    }, 1000);
  };

  render() {
    var { added, busy } = this.state; // cu desctructurare & var - doar de ex
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
        title={added === true ? 'Remove from W' : 'Add to W'}
        disabled={busy}
      >
        <span>
          <i className={added === true ? 'fas fa-heart' : 'far fa-heart'}></i>
        </span>
        <i className="fas fa-spinner icon"></i>
      </button>
    );
  }
}

class ProductControls extends React.Component {
  render() {
    const productId = this.props.productId;

    return [
      <AddToCartButton key="123" productId={productId}></AddToCartButton>,
      <AddToWishlistButton
        key="132"
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
