const express = require('express');
const morgan = require('morgan');

const server = express();

// Middlewares
server.use(morgan('tiny'));
server.use(express.static('public'));

// Response handlers

server.get('/tyson', (req, res) => {
  res.send('Ateityje tau duosiu - vieną taisoną');
});

server.listen(5025, () => {
  console.log('puslapis veikia ant http://localhost:5025/');
});


