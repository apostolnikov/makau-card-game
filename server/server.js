const express = require('express');
const http = require('http')
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);
server.listen(3000, () => console.log('listening on *:3000'));

// The event will be called when a client is connected.
io.on('connection', (socket) => {
  console.log('A client just joined on', socket.id);
});
