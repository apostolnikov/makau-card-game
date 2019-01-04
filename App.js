import React from 'react';
import { Provider } from 'react-redux';
import Game from './src/Game';
import store from './src/store/store';
// import * as firebase from 'firebase';

// import { firebaseConfig } from './src/config/firebaseConfig';

// firebase.initializeApp(firebaseConfig);

// test connection
// firebase.database().ref('users/').child('d1qsqd1wqsad1').on('value', (snapshot) => {
//   console.log(snapshot.val());
// });

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}