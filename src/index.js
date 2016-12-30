import React from 'react';
import ReactDOM from 'react-dom';
import ReduxProise from 'reux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(ReduxPromise)(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
