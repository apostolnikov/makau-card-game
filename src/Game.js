import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PlayerHand from './components/PlayerHand';
import { startGame, dealCards } from './store/reducers/cardsReducer';
import Card from './components/Card';
import { getTopLevelCard } from './shared/selectors';

const mapStateToProps = ({ cards }) => ({
  gameStart: cards.gameStart,
  isMyTurn: cards.isMyTurn,
  topDeckCard: getTopLevelCard(cards.deck)
});
class Game extends React.Component {
  componentDidMount() {
    this.props.dispatch(startGame());
    this.props.dispatch(dealCards());
  }

  render() {
    const { topDeckCard } = this.props;

    return (
      <Main source={require('./assets/background.png')}>
        <Deck card={topDeckCard} isFromDeck/>
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
  width: 100%;
  margin: auto;
`;