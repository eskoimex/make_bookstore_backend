import {OrderController} from '../controller/order.controller';
import { AsyncRouter } from 'express-async-router';

const orderRouter = AsyncRouter();


orderRouter.post('/order', OrderController.createOrder);
orderRouter.delete('/order/:orderId', OrderController.cancelOrder);
orderRouter.get('/order', OrderController.getAllOrders);
orderRouter.get('/order/:userId', OrderController.getOrderById);

export default orderRouter;



