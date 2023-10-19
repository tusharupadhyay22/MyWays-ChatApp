const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Initialize user count
let userCount = 0;

io.on('connection', (socket) => {
  // Increment user count on each connection
  userCount++;
  io.emit('user count', userCount);

  // Listen for messages from clients
  socket.on('send message', (message) => {
    io.emit('new message', message);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    userCount--;
    io.emit('user count', userCount);
  });
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
