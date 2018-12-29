import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

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
