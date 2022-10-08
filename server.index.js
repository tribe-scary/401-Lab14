'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

// instance of a listening event server at http://localhost:3002/caps
const server = new Server(PORT);

// namespace
const chatroom = server.of('/chatroom');

chatroom.on('connection', (socket) => {
  console.log('Connected to the CHATROOM namespace', socket.id);

  socket.on('JOIN', (room) => {
    console.log(`You have entered the ${room} room`);
  });

  socket.on('MESSAGE', (payload) => {
    logEvent('MESSAGE', payload);
    chatroom.emit('MESSAGE', payload);
  });

});

function logEvent(event, payload) {
  const date = new Date();
  const time = date.toTimeString();
  console.log('EVENT', { event, time, payload });
}
