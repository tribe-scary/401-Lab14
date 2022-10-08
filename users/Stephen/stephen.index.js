'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/chatroom');

const Chance = require('chance');
const chance = new Chance();

socket.emit('JOIN', 'chatroom');

let date = new Date();
// let time = date.toTimeString();

socket.on('connect', () => {
  console.log(socket.id);

  setInterval(() => {
    const message = {
      // time: time,
      name: 'Stephen',
      body: chance.sentence(),
    };
    socket.emit('MESSAGE', message);
  }, 9000);

});

socket.on('MESSAGE', (payload) => {
  console.log('=======================', payload);
});


socket.on('disconnect', () => {
  console.log('The server has been disconnected!', socket.id);
});

