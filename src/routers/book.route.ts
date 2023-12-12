import {BookController} from '../controller/book.controller';
import { AsyncRouter } from 'express-async-router';

const booksRouter = AsyncRouter();

booksRouter.get('/books', BookController.getAllBooks);
booksRouter.get('/book/:id', BookController.getBookById);
booksRouter.post('/book', BookController.createBook);
booksRouter.put('/book/:id', BookController.updateBook);
booksRouter.delete('/book/:id', BookController.deleteBook);

export default booksRouter;



