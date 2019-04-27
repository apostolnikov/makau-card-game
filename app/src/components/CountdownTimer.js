import React from 'react';
import CountdownCircle from 'react-native-countdown-circle';

const CountdownTimer = ({onTimePassed}) =>
  <CountdownCircle
    seconds={25}
    radius={30}
    borderWidth={8}
    color="#ff003f"
    bgColor="#fff"
    textStyle={{ fontSize: 20 }}
    onTimeElapsed={onTimePassed}
  />;

export default CountdownTimer;