import React from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, ImageBackground } from 'react-native';
import { AnimatedDeck, PlayerMenu, PlayerHand, GameArea } from './components';
import commonStyle from './styles';

const mapStateToProps = ({ cards }) => ({
  gameStart: cards.gameStart,
  myTurn: cards.myTurn,
})
class Game extends React.Component {
  getStyle() {
    return [
      commonStyle.gameArea,
      this.props.gameStart ? commonStyle.gameStart : commonStyle.gameNotStart,
    ];
  }
  render() {
    return (
      <ImageBackground
        source={require('./assets/bg.png')}
        style={{
          flex: 1,
        }}>
        <StatusBar hidden={true} />
        <View style={commonStyle.gameContainer}>
          <View style={this.getStyle()}>
            {!this.props.gameStart ? <AnimatedDeck /> : <GameArea />}
          </View>
          <PlayerHand />
        </View>
        {this.props.gameStart && this.props.myTurn ? <PlayerMenu /> : null}
      </ImageBackground>
    );
  }
}

export default connect(mapStateToProps)(Game);
