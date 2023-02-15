import express, {Request, Response} from 'express';
import homeRouter from './HomeRouter';
import { LogInfo } from '../utils/logger';

// Server instance
let server = express();

// Router instance
let rootRouter = express.Router();

// Activate for request to http://localhost:8000/api

//GET: http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: http://localhost:8000/api/')

    // Send Hello World
    res.send('Welcome to my API Restfull: Express + TS + Nodemon + Jest + Swagger + Mongoose');
});


//Redirections to Routes & Controllers
server.use('/', rootRouter);
server.use('/home', homeRouter);

//Add more routes to the app

export default server;