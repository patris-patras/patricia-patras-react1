import { useCallback, useEffect, useRef, useState } from 'react';
import ProductTile from './ProductTile';

const baseUrl = 'https://swapi.dev/api/vehicles';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [busy, setBusy] = useState(true);
  const [urlToFetch, setUrlToFetch] = useState(baseUrl);
  const nextUrl = useRef('');
  const loadMoreRef = useRef(null);

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

        // closure functions vvv
        setProducts((products) => {
          return [...products, ...newProducts];
        });
        setBusy(false);
      });
  }, [urlToFetch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  // end recipe

  useEffect(() => {
    // defining options
    const options = {
      root: null,
      rootMargin: '0px',
      threshhold: 1.0,
    };

    // instantiating the observer
    const observer = new IntersectionObserver((entries) => {
      const intersectionObserverEntry = entries[0];

      if (
        intersectionObserverEntry.isIntersecting &&
        nextUrl.current.length > 0
      ) {
        setUrlToFetch(nextUrl.current);
      }
    }, options);

    // listening/observing to intersection events
    const targetElement = loadMoreRef.current;
    observer.observe(targetElement);
    // provide cleanup function

    return () => {
      observer.unobserve(targetElement);
    };
  }, []);

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
      <div className="col-12 text-center" ref={loadMoreRef}>
        {nextUrl.current.length > 0 ? (
          <button
            className="btn btn-xl btn-warning"
            title="Load more"
            type="button"
            disabled={busy}
            ref={loadMoreRef}
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
