import * as dotenv from 'dotenv';
dotenv.config();
import server from './config/server';
import app from './app';
import { ServerResponse } from 'http';

const start = () => {
  try {
    app.listen(server.port, (err: void | undefined) => {
      if (err) {
        console.error('server failed to start', err);
        throw new Error(err);
      }

      console.info(`Listening on port ${server.port}`);
    });
  } catch (err) {
    console.error('server failed to initialize', err);
  }
};

start();
