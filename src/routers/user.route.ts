import {UserController} from '../controller/user.controller';
import { AsyncRouter } from 'express-async-router';

const usersRouter = AsyncRouter();

usersRouter.get('/users', UserController.getAllUsers);
usersRouter.get('/users/:id', UserController.getUserById);
usersRouter.post('/users', UserController.createUser);
usersRouter.put('/users/:id', UserController.updateUser);
usersRouter.delete('/users/:id', UserController.deleteUser);

export default usersRouter;



