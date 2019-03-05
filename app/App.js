import React from 'react';
import { Provider } from 'react-redux';
import Game from './src/Game';
import store from './src/store/store';

const App = () =>
  <Provider store={store}>
    <Game />
  </Provider>;

export default App;