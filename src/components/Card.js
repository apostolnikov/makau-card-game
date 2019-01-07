import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import commonStyle from './styles';
export default class Card extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <Image
          resize="stretch"
          source={this.props.card.image}
          style={[
            commonStyle.card
          ]}
        />
      </TouchableOpacity>
    );
  }
}
