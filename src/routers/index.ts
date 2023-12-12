import PingController from '@controllers/ping.controller';
import { NotFoundException } from '@libs/errors';
import { AsyncRouter } from 'express-async-router';
import { isAuth } from '@libs/is-auth';
import { Request, Response } from 'express';
import authRouter from './auth.route';
import userRouter from './user.route';
import bookRouter from './book.route';
import orderRouter from './order.route';

const router = AsyncRouter();

// Server Health Check
router.get('/ping', PingController.ping);

//Auth Router
router.use('/api/v1/auth', authRouter);

//User Router
router.use('/api/v1', userRouter);

/*** TO PROTECT A ROUTE --- Add isAuth as a Middleware***/
//router.use('/api/v1', isAuth, userRouter);

//Order Router
router.use('/api/v1', orderRouter);

//Book Router
router.use('/api/v1', bookRouter);

// 404 Route Not Found
router.all('*', (req: Request, res: Response) => {
  throw new NotFoundException(
    `${req.method} ${req.url} endpoint does not exist`,
  );
});

export default router;
