import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';
import ShoppingCart from './ShoppingCart';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <div style={{ display: 'flex' }}>
      <Products />
      <ShoppingCart />
    </div>
  </Provider>,
  document.getElementById('root')
);
