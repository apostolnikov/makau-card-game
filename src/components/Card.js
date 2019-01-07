import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
export default class Card extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <CardImage
          resize="stretch"
          source={this.props.card.image}
        />
      </TouchableOpacity>
    );
  }
}

const CardImage = styled.Image`
  width: 100;
  height: 175;
`;