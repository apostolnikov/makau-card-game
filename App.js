import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import * as firebase from 'firebase';
import { firebaseConfig } from './src/config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

// test connection
// firebase.database().ref('users/').child('d1qsqd1wqsad1').on('value', (snapshot) => {
//   console.log(snapshot.val());
// });

export default class App extends React.Component {
  render() {
    return (
      <Main>
        <Text>Open up App.js to start working on your app!</Text>
      </Main>
    );
  }
}

const Main = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
