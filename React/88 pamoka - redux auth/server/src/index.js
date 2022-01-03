import jsonServer from 'json-server';
import authRouter from './routers/auth-router.js';

const PORT = 5000;
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use('/auth', authRouter);
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running: http://localhost:${PORT}`);
});
