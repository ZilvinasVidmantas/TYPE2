const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const server = express();
const { SERVER_PORT } = process.env;

// Middlewares
server.use(morgan('tiny'));
server.use(express.static('public'));

// Response handlers

server.get('/tyson', (req, res) => {
  res.send('Ateityje tau duosiu - vieną taisoną');
});

server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant http://localhost:${SERVER_PORT}/`);
});
