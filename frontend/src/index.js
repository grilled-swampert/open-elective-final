import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import reducers from './reducers';
import './App.css';
import App from './App';

const store = createStore (reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);

