const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');
const categoryRouter = require('./routes/category-router');
const cityRouter = require('./routes/city-router');
const imageRouter = require('./routes/image-router');
const serviceRouter = require('./routes/service-router');

const server = express();
const {
  SERVER_DOMAIN,
  SERVER_PORT,
  DB_CONNECTION,
  PUBLIC_PATH,
} = process.env;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Middlewares
server.use(morgan('tiny'));
server.use(cors(corsOptions));
server.use(express.json());
server.use(express.static(PUBLIC_PATH));

// Response handlers
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/images', imageRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/cities', cityRouter);
server.use('/api/services', serviceRouter);

server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant ${SERVER_DOMAIN}:${SERVER_PORT}/`);
  (async () => {
    try {
      await Mongoose.connect(DB_CONNECTION);
      console.log('Prisijungta prie duomenų bazės');
    } catch (error) {
      console.error('Nepavyko prisijungti prie duomenų bazės');
    }
  })();
});
