import jsonServer from 'json-server';
import authRouter from './routers/auth-router.js';
import bodyParser from 'body-parser';

const PORT = 5000;
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middlewares
server.use(bodyParser.json());
server.use(middlewares);

// Routes
server.use('/auth', authRouter);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running: http://localhost:${PORT}`);
});
