import { Book } from '../entity/book.entity';
import { BookRepository } from '../repository/book.repository';


const bookRepository = new BookRepository();

export class BookService {
  async getAllBooks(): Promise<Book[]> {
    return bookRepository.getAllBooks();
  }

  async getBookById(id: number): Promise<Book | null> {
    return bookRepository.getBookById(id);
  }

  async createBook(order: Book): Promise<Book> {
      return bookRepository.createBook(order);
  }

  async updateBook(id: number, order: Book): Promise<Book | null> {
    return bookRepository.updateBook(id, order);  }

  async deleteBook(id: number): Promise<Book> {
    return bookRepository.deleteBook(id);
  }
}
