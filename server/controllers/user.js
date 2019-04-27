/* eslint-disable no-console */
const User = require('../models/User');

// eslint-disable-next-line no-undef
module.exports = {
  onUserJoined: async (userID, socket) => {
    // The userId is null for new users.
    if (!userID) {
      const user = db.collection('users').insert({}, (err, user) => {
        socket.emit('userJoined', user._id);

      });
    } else {
      const user = await User.findOne({ '_id': userID });
      socket.emit('userJoined', user._id);
      //send info for the existing user
    }
  }
};