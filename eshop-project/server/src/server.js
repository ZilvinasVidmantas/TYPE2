const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
require('dotenv').config();
const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');

const server = express();
const {
  SERVER_PORT,
  DB_CONNECTION,
} = process.env;

// Middlewares
server.use(morgan('tiny'));
server.use(express.json());

// Response handlers
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);

server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant http://localhost:${SERVER_PORT}/`);
  (async () => {
    try {
      await Mongoose.connect(DB_CONNECTION);
      console.log('Prisijungta prie duomenų bazės');
    } catch (error) {
      console.error('Nepavyko prisijungti prie duomenų bazės');
    }
  })();
});

// 11:15