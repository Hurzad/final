import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import shopStore from './tools/store/shopStore'
import { addProduct, getProduct } from './tools/actions/shopAction'
import { Provider } from 'react-redux';
import { supabase } from './supabase/supabaseClient';
import { CartProvider } from 'react-use-cart';
import { WishlistProvider } from 'react-use-wishlist';


const store = shopStore();

store.subscribe(() => {
  console.log(store.getState());
})

const fetchData = async () => {
  const { data, error } = await supabase.from('products').select();
  if (error) {
    console.log(error);
  } else {
    store.dispatch(getProduct(data));
  }
}

fetchData();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WishlistProvider>
      <CartProvider>
        {/* shopStore store a braber oldugu ucun store yazdiq */}
        <Provider store={store}>
          <App />
        </Provider>
      </CartProvider>
    </WishlistProvider>
);