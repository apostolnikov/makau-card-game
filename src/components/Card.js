import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { cannotPlayCardWarning } from '../shared/heplers';

const handleCardOnPress = (onCardPress, card, isPlayable, isFromDeck) => {
  if (isFromDeck) {
    return;
  } else {
    return isPlayable ? onCardPress(card) : cannotPlayCardWarning();
  }
};

const Card = ({ card, onCardPress, isPlayable, isFromDeck }) =>
  <TouchableOpacity onPress={() => handleCardOnPress(onCardPress, card, isPlayable, isFromDeck)}>
    <CardImage
      resize="stretch"
      source={card.image}
      isPlayable={isPlayable || isFromDeck}
    />
  </TouchableOpacity>;

export default Card;

const CardImage = styled.Image`
  width: 100px;
  height: 150px;
  margin-left: 3px;
  margin-right: 3px;
  opacity: ${props => props.isPlayable ? 1 : 0.3}
`;