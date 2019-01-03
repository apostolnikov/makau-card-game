/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from './reducers/rootReducer';

const composeEnhancers = (__DEV__ && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

function configureStore(initialState = {}) {
  // configure middlewares
  const middlewares = [thunk, promise()];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore();

export default store;
