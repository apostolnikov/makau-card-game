const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  userID: ObjectId,
  username: String
});

const User = mongoose.model('User', userSchema);

// eslint-disable-next-line no-undef
module.exports = User;