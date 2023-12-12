import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';

const userRepository = new UserRepository();

export class UserService {
  async getAllUsers(): Promise<User[]> {
    return userRepository.getAllUsers();
  }

  async getUserById(id: number): Promise<User | null> {
    return userRepository.getUserById(id);
  }

  async createUser(user: User): Promise<User> {
      return userRepository.createUser(user);
  }

  async updateUser(id: number, user: User): Promise<User | null> {
    return userRepository.updateUser(id, user);  }

  async deleteUser(id: number): Promise<User> {
    return userRepository.deleteUser(id);
  }
}
