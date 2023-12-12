import { Request, Response, NextFunction } from 'express';
import { OrderService } from '../service/order.service';
import { checkError } from '@libs/validator';
import { BadRequestException } from '@libs/errors';
import { STATUS_CODE_OK} from '@libs/constant';

const orderService = new OrderService();

export class OrderController {

  ///MAKE A NEW ORDER///
  static async createOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const errors = checkError(req.body);
       if (!errors.isEmpty())  throw new BadRequestException("Error "+errors.mapped);
      const {userId, bookId} = req.body;
      const newOrder = await orderService.createOrder(userId, bookId);
       res.status(STATUS_CODE_OK).json({ success: true, message:"Order Created Successfully", newOrder });
    } catch (error) {
      next(error)
    }
}

 ///CANCEL ORDER ///
  static async cancelOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const errors = checkError(req);
      if (!errors.isEmpty())  throw new BadRequestException("Error "+errors.mapped);
      const orderId = parseInt(req.params.id);
      const result = await orderService.cancelOrder(orderId);
       res.status(STATUS_CODE_OK).json({ success: true, message:"Order Cancelled Successfully", result });
    } catch (error) {
      next(error)
    }
    
  }

  /// FETCH ALL ORDERS////
  static async getAllOrders(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const orders = await orderService.getAllOrders();
      res.status(STATUS_CODE_OK).json({ success: true, message:"Orders Fetched Successfully", orders });
    } catch (error) {
      next(error)
    }

  }

  //FETCH ORDER BY USERid///
  static async getOrderById(req: Request, res: Response, next:NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const  skip  = Number(req.query.skip);
      const  take  = Number(req.query.take);
      const order = await orderService.getOrderById(id, skip, take);
          res.status(STATUS_CODE_OK).json({ success: true, message:"Order Fetched Successfully", order });
    } catch (error) {
      next(error)
    }
  }

}
