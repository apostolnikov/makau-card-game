import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import styled from 'styled-components';
import { addCardToDeck } from '../store/reducers/cardsReducer';
import { getTopLevelCard } from '../shared/selectors';

const mapStateToProps = ({ cards }) => ({
  playerHand: cards.playerHand,
  topDeckCard: getTopLevelCard(cards.deck)
});
class PlayerHand extends React.Component {

  getItemKey = (item) => this.props.playerHand.indexOf(item).toString();

  onCardPress = (card) => this.props.dispatch(addCardToDeck(card));

  checkIfCardIsPlayable = (topDeckCard, currectCard) =>
    topDeckCard.type === currectCard.type || topDeckCard.number === currectCard.number;

  renderCard = ({ item }) =>
    <Card
      card={item}
      onCardPress={this.onCardPress}
      isPlayable={this.checkIfCardIsPlayable(this.props.topDeckCard, item)}
    />;

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
