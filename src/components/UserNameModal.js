import React from 'react';
import { Modal, Text, View } from 'react-native';

const UserNameModal = ({ isVisible }) =>
  <View style={{marginTop: 22}}>
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}>
      <View style={{marginTop: 22}}>
        <View>
          <Text>Hello World!</Text>
        </View>
      </View>
    </Modal>
  </View>;

export default UserNameModal;