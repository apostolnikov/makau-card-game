import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ cards }) => ({
  playerHand: cards.playerHand
});
class PlayerHand extends React.Component {


  render() {
    return (
      <></>
    );
  }
}
export default connect(mapStateToProps)(PlayerHand);
