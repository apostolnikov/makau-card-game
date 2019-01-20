import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import styled from 'styled-components';
import { addCardToDeck } from '../store/reducers/cardsReducer';

const mapStateToProps = ({ cards }) => ({
  playerHand: cards.playerHand
});
class PlayerHand extends React.Component {

  onCardPress = (card) => this.props.dispatch(addCardToDeck(card));

  renderCard = ({ item }) => <Card card={item} onCardPress={this.onCardPress}/>;

  getItemKey = (item) => this.props.playerHand.indexOf(item).toString();

  render() {
    return (
      <CardsList
        data={this.props.playerHand}
        keyExtractor={this.getItemKey}
        renderItem={this.renderCard}
        horizontal={true}
      />
    );
  }
}
export default connect(mapStateToProps)(PlayerHand);

const CardsList = styled.FlatList`
  display: flex;
  width: 100%;
`;
