import React from 'react';
import { connect } from 'react-redux';
import CountdownTimer from './components/CountdownTimer';
import styled from 'styled-components';
import PlayerHand from './components/PlayerHand';
import { startGame, dealCards } from './store/reducers/cardsReducer';
import Card from './components/Card';
import { getTopLevelCard } from './shared/selectors';
import UserNameModal from './components/UserNameModal';

const mapStateToProps = ({ cards }) => ({
  gameStart: cards.gameStart,
  isMyTurn: cards.isMyTurn,
  topDeckCard: getTopLevelCard(cards.deck)
});
class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showUserModal: false
    };
  }

  componentDidMount() {
    this.props.dispatch(startGame());
    this.props.dispatch(dealCards());
  }

  render() {
    const { topDeckCard } = this.props;
    const { showUserModal } = this.state;

    return (
      <Main source={require('./assets/background.png')}>
        <UserNameModal isVisible={showUserModal}/>
        <CountdownTimer onTimePassed={() => console.log('time passed!!!')}/>
        <Deck card={topDeckCard} isFromDeck/>
        <Hand />
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
  align-items: center;
  justify-content: center;
`;

const Deck = styled(Card)`
  width: 100%;
  height: auto;
  margin-top: 200px;
`;

const Hand = styled(PlayerHand)`
  margin-top: 500px;
  height: auto;
`;