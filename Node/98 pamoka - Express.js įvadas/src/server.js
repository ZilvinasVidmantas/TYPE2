const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const fruitRouter = require('./routes/fruit-router');

const server = express();
const { SERVER_PORT } = process.env;

// Middlewares
server.use(morgan('tiny'));
server.use(express.static('public'));
server.use(express.json());

// Response handlers
server.use('/api/fruits', fruitRouter);

server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant http://localhost:${SERVER_PORT}/`);
});


// REST API standard
// GET    '/fruits'     -> visus vaisius
// POST   '/fruits/'    -> sukurti vieną vaisių
// GET    '/fruits/:id' -> gauti vieną vaisių
// DELETE '/fruits/:id' -> ištrinti vieną vaisių
// PATCH  '/fruits/:id' -> ATNAUJINTI vieną vaisių
// PUT    '/fruits/:id' -> Perrašo vieną vaisių
