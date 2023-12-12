import { Request, Response, NextFunction } from 'express';
import { UserService } from '../service/user.service';
import { checkError } from '../libs/validator';
import { BadRequestException } from '@libs/errors';
import { STATUS_CODE_OK } from '@libs/constant';


const userService = new UserService();

export class UserController {

  static async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await userService.getAllUsers();
      res.status(STATUS_CODE_OK).json({ success: true, message:"Users Record Fetched Successfully", users });
    } catch (error) {
      next(error)
    }
  }

  static async getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
 
    try {
      const id = parseInt(req.params.id);
      const user = await userService.getUserById(id);
      res.status(STATUS_CODE_OK).json({ success: true, message:"User Fetched Successfully", user });
    } catch (error) {
      next(error)
    }
  }

  static async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const errors = checkError(req);
       if (!errors.isEmpty())  throw new BadRequestException("Error "+errors.mapped);
       const user = req.body;
       const newUser = await userService.createUser(user);
       res.status(STATUS_CODE_OK).json({ success: true, message:"User Created Successfully", newUser });
    } catch (error) {
      next(error)
    }
  }

  static async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const errors = checkError(req);
       if (!errors.isEmpty())  throw new BadRequestException("Error "+errors.mapped);
       const id = parseInt(req.params.id);
      const user = req.body;
       const updatedUserRecord = await userService.updateUser(id, user);
       res.status(STATUS_CODE_OK).json({ success: true, message:"User Record Updated Successfully", updatedUserRecord });
    } catch (error) {
      next(error)
    }
  }

  static async deleteUser(req: Request, res: Response, next:NextFunction): Promise<void> {
    try {
       const id = parseInt(req.params.id);
    await userService.deleteUser(id);
    } catch (error) {
      next(error)
    }
}
}
