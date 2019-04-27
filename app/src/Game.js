import React from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import SocketIO from 'socket.io-client';
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
      userID: null,
      showUserModal: false
    };

    this.socket = SocketIO('http://192.168.1.12:3000');
    this.socket.on('connect', () => console.log('connected to server'));
    this.checkUserID();
  }

  componentDidMount() {
    this.props.dispatch(startGame());
    this.props.dispatch(dealCards());
  }

  checkUserID() {
    AsyncStorage.getItem('userID')
      .then((userID) => {
        if (!userID) {
          this.setState({ showUserModal: true });
        } else {
          this.socket.emit('userJoined', userID);
          this.setState({ userID });
        }
      });
  }

  // createNewUser() {

  // }

  render() {
    const { topDeckCard } = this.props;
    const { userID, showUserModal } = this.state;

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