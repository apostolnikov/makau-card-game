import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class PlayerMenu extends React.Component {
  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        style={{
          backgroundColor: '#331919',
          padding: 5,
          borderRadius: 5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <Text style={{ color: '#fff' }}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
