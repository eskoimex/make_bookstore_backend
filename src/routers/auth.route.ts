import {LoginController} from '../controller/auth.controller';
import { AsyncRouter } from 'express-async-router';

const authRouter = AsyncRouter();

authRouter.post('/login', LoginController.loginUser);

export default authRouter;
