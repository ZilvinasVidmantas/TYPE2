const jsonServer = require('json-server');
const carsJoinedRouter = require('./routers/cars-joined-router');
const bodyParser = require('body-parser');
const authRouter = require('./routers/auth-router.js')

const DATABASE_FILE = 'database.json';
const PORT = 5000;

const server = jsonServer.create();
const jsonServerRouter = jsonServer.router(DATABASE_FILE);
const jsonServerMiddlewares = jsonServer.defaults();

// Middlewares
server.use(jsonServerMiddlewares);
server.use(bodyParser.json());

// Routers and Routes
server.use('/cars/joined', carsJoinedRouter);
server.use('/auth', authRouter);
server.use(jsonServerRouter);

// Launch server 
server.listen(PORT, () => {
  console.log(`JSON Server is running on:\nhttp://localhost:${PORT}`);
});
