const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

server.listen(port, () => console.log(`listening on port: ${port}`));

io.on('connection', socket => {
  console.log('new user connected');

  socket.on('disconnect', () => {
      console.log('User was disconnected');
  });
});