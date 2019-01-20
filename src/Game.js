import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PlayerHand from './components/PlayerHand';
import { startGame, dealCards } from './store/reducers/cardsReducer';
import Card from './components/Card';

const mapStateToProps = ({ cards }) => ({
  gameStart: cards.gameStart,
  isMyTurn: cards.isMyTurn,
  deck: cards.deck
});
class Game extends React.Component {
  componentDidMount() {
    this.props.dispatch(startGame());
    this.props.dispatch(dealCards());
  }

  render() {
    const { deck } = this.props;
    const topDeckCard = deck.length && deck[deck.length - 1];

    return (
      <Main source={require('./assets/background.png')}>
        <Deck card={topDeckCard}/>
        <PlayerHand />
      </Main>
    );
  }
}

export default connect(mapStateToProps)(Game);


const Main = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 10px;
  align-content: space-between;
`;

const Deck = styled(Card)`
  width: 150px;
  height: 225px;
`;