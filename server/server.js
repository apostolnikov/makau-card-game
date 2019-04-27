const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketIO = require('socket.io');

const port = 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const UserController = require('./controllers/user');

if (process.env.NODE_ENV === 'test') {
	mongoose.connect('mongodb://localhost/makauDB', { useNewUrlParser: true });
} else {
	mongoose.connect('mongodb://localhost/makauDB', { useNewUrlParser: true });
}

server.listen(port, () => console.log(port, 'is up'));

io.on('connection', socket => {
  console.log('new user connected');

  socket.on('userJoined', userID => UserController.onUserJoined(userID, socket));
  socket.on('message-channel', message => console.log(message));

  socket.on('disconnect', () => console.log('User was disconnected'));
});
