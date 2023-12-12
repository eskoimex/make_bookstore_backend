import { Auth } from '../entity/auth.entity';
import { AuthRepository } from '../repository/auth.repository';

const authRepository = new AuthRepository();

export class AuthService {
  async loginUser(email: string, password: string): Promise<Auth> {
    return authRepository.loginUser(email, password);
}

}