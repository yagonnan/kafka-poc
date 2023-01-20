import express, { NextFunction } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import server from './config/server';
import { errorHandler } from './error-handler/error-handler';
import routes from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(hpp());
app.use(server.apiRoot, routes());
app.use(errorHandler); // registration of handler

export default app;
