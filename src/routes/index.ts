import { NextFunction, Router } from 'express';
import { Request, Response } from 'express';
import { ErrorException } from '../error-handler/error-exception';
import { ErrorCode } from '../error-handler/error-code';
import producerRouter from './producer';

const routes = () => {
  const app = Router();

  producerRouter(app);

  app.get('/healthcheck', (req: Request, res: Response) => {
    res.send('Application works!');
  });

  app.get('/throw-unauthenticated', (req: Request, res: Response, next: NextFunction) => {
    throw new ErrorException(ErrorCode.Unauthenticated);
    // or
    // next(new ErrorException(ErrorCode.Unauthenticated))
  });

  app.get('/throw-maximum-allowed-grade', (req: Request, res: Response, next: NextFunction) => {
    throw new ErrorException(ErrorCode.MaximumAllowedGrade, {
      grade: Math.random(),
    });
    // or
    // next(new ErrorException(ErrorCode.MaximumAllowedGrade, { grade: Math.random() }))
  });

  app.get('/throw-unknown-error', (req: Request, res: Response, next: NextFunction) => {
    const num: any = null;
    // Node.js will throw an error because there is no length property inside num variable
    console.log(num.length);
  });

  // app.get("/", function (req, res, next) {
  //   fs.readFile("/file-does-not-exist", function (err, data) {
  //     if (err) {
  //       next(err); // Pass errors to Express.
  //     } else {
  //       res.send(data);
  //     }
  //   });
  // });

  return app;
};

export default routes;
