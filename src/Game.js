import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const mapStateToProps = ({ cards }) => ({
  gameStart: cards.gameStart,
  myTurn: cards.myTurn,
});

class Game extends React.Component {
  render() {
    return (
      <Main source={require('./assets/background.png')} />
    );
  }
}

export default connect(mapStateToProps)(Game);


const Main = styled.ImageBackground`
  flex: 1;
`;