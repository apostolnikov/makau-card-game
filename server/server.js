const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

server.listen(port, () => console.log(port, 'is up'));

io.on('connection', socket => {
  console.log('new user connected');

  socket.on('message-channel', message => console.log(message));
  socket.on('disconnect', () => {
      console.log('User was disconnected');
  });
});
