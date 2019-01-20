import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Card = ({ card, onCardPress }) =>
  <TouchableOpacity onPress={() => onCardPress(card)}>
    <CardImage
      resize="stretch"
      source={card.image}
    />
  </TouchableOpacity>;

export default Card;

const CardImage = styled.Image`
  width: 100px;
  height: 150px;
  margin-left: 3px;
  margin-right: 3px;
`;