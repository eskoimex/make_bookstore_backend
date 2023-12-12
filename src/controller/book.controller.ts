import { Request, Response, NextFunction } from 'express';
import { BookService } from '../service/book.service';
import { STATUS_CODE_OK } from '@libs/constant';
import { checkError } from '@libs/validator';
import { BadRequestException } from '@libs/errors';

const bookService = new BookService();

export class BookController {
  static async getAllBooks(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const books = await bookService.getAllBooks();
      res
        .status(STATUS_CODE_OK)
        .json({ success: true, message: 'Books Fetched Successfully', books });
    } catch (error) {
      next(error);
    }
  }

  static async getBookById(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const book = await bookService.getBookById(id);
      res
        .status(STATUS_CODE_OK)
        .json({ success: true, message: 'Book Fetched Successfully', book });
    } catch (error) {
      next(error);
    }
  }

  static async createBook(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const errors = checkError(req);
      if (!errors.isEmpty())
        throw new BadRequestException('Error ' + errors.mapped);
      const book = req.body;
      const newBook = await bookService.createBook(book);
      res
        .status(STATUS_CODE_OK)
        .json({ success: true, message: 'User Created Successfully', newBook });
    } catch (error) {
      next(error);
    }
  }

  static async updateBook(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const errors = checkError(req);
      if (!errors.isEmpty())
        throw new BadRequestException('Error ' + errors.mapped);
      const id = parseInt(req.params.id);
      const book = req.body;
      const updatedBookRecord = await bookService.updateBook(id, book);
      res
        .status(STATUS_CODE_OK)
        .json({
          success: true,
          message: 'Book Record Updated Successfully',
          updatedBookRecord,
        });
    } catch (error) {
      next(error);
    }
  }

  static async deleteBook(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      await bookService.deleteBook(id);
   } catch (error) {
     next(error)
   }
}
}
