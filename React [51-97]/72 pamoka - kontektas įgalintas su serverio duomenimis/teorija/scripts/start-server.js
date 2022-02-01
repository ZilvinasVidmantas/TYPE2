const jsonServer = require('json-server');

const PORT = 5000;
const DATABSE_FILE = 'api.json';

const server = jsonServer.create();
const router = jsonServer.router(DATABSE_FILE);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
	console.log(`JSON Server is running on:\nhttp://localhost:${PORT}`);
});
