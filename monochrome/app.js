const ADD_TO_CART_EVENT = 'cart:add';
const REMOVE_FROM_CART_EVENT = 'cart:remove';
const ADD_TO_WISHLIST_EVENT = 'wl:add';
const REMOVE_FROM_WISHLIST_EVENT = 'wl:remove';

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
        new CustomEvent(
          this.state.added ? REMOVE_FROM_CART_EVENT : ADD_TO_CART_EVENT,
          {
            detail: {
              productId: this.props.productId,
            },
          },
        ),
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
      const { productId } = this.props;

      dispatchEvent(
        new CustomEvent(
          this.state.added ? REMOVE_FROM_WISHLIST_EVENT : ADD_TO_WISHLIST_EVENT,
          {
            detail: {
              productId,
            },
          },
        ),
      );

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

class HeaderCounters extends React.Component {
  state = {
    cartItemsCount: 0,
    wishlistItemsCount: 0,
    cartItems: [],
    wishlistItems: [],
  };

  showProducts(collectionName, displayName) {
    let message = '';
    const bucket = displayName.toLowerCase();

    if (this.state[collectionName] > 1) {
      message = `You have no products in your ${bucket}.`;
    } else {
      message = `The products in your ${bucket}: ${
        this.state[`${bucket}Items`]
      }`;
    }

    alert(message);
    // alert(this.state[collectionName]);
  }

  productCartAction = (event) => {
    const { productId } = event.detail;
    const { type: eventType } = event;
    let { cartItemsCount, cartItems } = this.state;

    switch (eventType) {
      case ADD_TO_CART_EVENT:
        cartItemsCount++;
        cartItems.push(productId);
        break;

      case REMOVE_FROM_CART_EVENT:
        cartItemsCount--;

        cartItems = cartItems.filter((item) => {
          return item !== productId;
        });
        break;
    }

    this.setState({
      cartItemsCount,
      cartItems,
    });
  };

  productWishlistAction = (event) => {
    alert('On event');
    const { productId } = event.detail;
    const eventType = event.type;
    const { wishlistItems } = this.state;
    let newProductIds = [];
    let productCount = 0;

    switch (eventType) {
      case ADD_TO_WISHLIST_EVENT:
        newProductIds =
          wishlistItems.length === 0
            ? [productId]
            : [...wishlistItems, productId];
        break;

      case REMOVE_FROM_WISHLIST_EVENT:
        for (let i = 0; i < wishlistItems.length; i++) {
          if (wishlistItems[i] === productId) {
            continue;
          }

          newProductIds.push(wishlistItems[i]);
        }

        break;
    }

    productCount = newProductIds.length;

    this.setState({
      wishlistItemsCount: productCount,
      wishlistItems: newProductIds,
    });
  };

  componentDidMount() {
    addEventListener(ADD_TO_CART_EVENT, this.productCartAction);
    addEventListener(REMOVE_FROM_CART_EVENT, this.productCartAction);

    addEventListener(ADD_TO_WISHLIST_EVENT, this.productWishlistAction);
    addEventListener(REMOVE_FROM_WISHLIST_EVENT, this.productWishlistAction);
  }

  componentWillUnmount() {
    removeEventListener(ADD_TO_CART_EVENT, this.productCartAction);
    removeEventListener(REMOVE_FROM_CART_EVENT, this.productCartAction);

    removeEventListener(ADD_TO_WISHLIST_EVENT, this.productWishlistAction);
    removeEventListener(REMOVE_FROM_WISHLIST_EVENT, this.productWishlistAction);
  }

  render() {
    const { wishlistItemsCount, cartItemsCount } = this.state;

    return (
      <React.Fragment>
        <ul>
          <li>
            <a href="http://" title="My Account">
              <i className="fas fa-user"></i>
            </a>
          </li>

          <li>
            <a href="http://" title="Saved Items">
              {wishlistItemsCount}
              <i
                className="far fa-heart"
                onClick={() => {
                  this.showProducts('wishlistItemsCount', 'Wishlist');
                }}
              ></i>
            </a>
          </li>

          <li>
            <a href="http://" title="Cart">
              {cartItemsCount}
              <i
                className="fas fa-shopping-bag"
                onClick={() => {
                  this.showProducts('cartItemsCount', 'Cart');
                }}
              ></i>
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

const headerCounters = document.querySelector('.header-controls');
ReactDOM.render(<HeaderCounters />, headerCounters);
