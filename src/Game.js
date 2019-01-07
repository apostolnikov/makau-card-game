import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PlayerHand from './components/PlayerHand';
import { startGame, dealCards } from './store/reducers/cardsReducer';

const mapStateToProps = ({ cards }) => ({
  gameStart: cards.gameStart,
  myTurn: cards.myTurn,
  playerHand: cards.playerHand
});
class Game extends React.Component {
  componentDidMount() {
    this.props.dispatch(startGame());
    this.props.dispatch(dealCards());
  }

  render() {
    return (
      <Main source={require('./assets/background.png')}>
        <PlayerHand playerHand={this.props.playerHand} />
      </Main>
    );
  }
}

export default connect(mapStateToProps)(Game);


const Main = styled.ImageBackground`
  flex: 1;
`;