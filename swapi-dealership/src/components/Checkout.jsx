import { useContext } from 'react';
import CheckoutForm from './CheckoutForm';
import CartTotals from './CartTotals';
import { AppContext } from './../contexts/AppContext';

export const Checkout = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);

  const placeOrder = (formData) => {
    dispatch({
      type: 'setOrder',
      payload: {
        address: formData,
        items: [...cart], // desface array de cart + face un array nou cu pointer in cart -> clonez cartul asa ptr ca altfel nu o sa mai pot rupe referinta; e cart.slice()
      },
    });

    dispatch({
      type: 'setScreen',
      payload: 'orderConfirmation',
    });

    dispatch({
      type: 'emptyCart',
    }); // event-action fara payload ptr ca de fapt doar vreau sa golesc array-ul aici
  };

  return (
    <section className="row">
      <header className="col-12 mb-4">
        <h2>Checkout</h2>
      </header>

      <section className="col-12 col-md-8">
        <CheckoutForm
          onSubmit={(formData) => {
            placeOrder(formData);
          }}
        ></CheckoutForm>
      </section>

      <footer className="col-12 col-md-4">
        <CartTotals cart={cart}></CartTotals>
      </footer>
    </section>
  );
};

export default Checkout;
