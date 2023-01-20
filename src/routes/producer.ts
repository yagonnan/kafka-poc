import { Router } from 'express';
import sendMessage from '../producers';

const router = Router();
const producerRouter = (app: any) => {
  app.use('/send', router);

  router.get('/', sendMessage);
  return router;
};

export default producerRouter;
