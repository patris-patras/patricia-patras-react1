import { useCallback, useEffect, useRef, useState } from 'react';
import ProductTile from './ProductTile';

const baseUrl = 'https://swapi.dev/api/vehicles';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [busy, setBusy] = useState(true);
  const [urlToFetch, setUrlToFetch] = useState(baseUrl);
  const nextUrl = useRef('');

  // recipe
  const fetchProducts = useCallback(() => {
    setBusy(true);

    return fetch(urlToFetch)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newProducts = data.results;

        // nextUrl.current = data.next !== null ? data.next : '' sau
        // nullish coalescing operator:
        nextUrl.current = data?.next ?? '';

        setProducts([...products, ...newProducts]);
        setBusy(false);
      });
  }, [urlToFetch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  // end recipe

  return (
    <section className="row">
      <div className="col-12 mb-6">
        <h2>Available Listings</h2>
      </div>

      {products.map((product) => {
        const { name } = product;

        return <ProductTile product={product} key={name}></ProductTile>;
      })}

      {/* {busy ? '...loading' : <></>} */}
      <div className="col-12 text-center">
        {nextUrl.current.length > 0 ? (
          <button
            className="btn btn-xl btn-warning"
            title="Load more"
            type="button"
            disabled={busy}
            onClick={() => {
              setUrlToFetch(nextUrl.current);
            }}
          >
            {busy ? '...loading' : 'Load More'}
          </button>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Products;
