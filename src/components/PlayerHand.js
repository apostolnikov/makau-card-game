import React from 'react';
import Card from './Card';
import styled from 'styled-components';

class PlayerHand extends React.Component {

  renderCard = ({ item }) => <Card card={item}/>;
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
export default PlayerHand;

const CardsList = styled.FlatList`
  display: flex;
  width: 100%;
`;
