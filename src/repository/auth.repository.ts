import {  UnauthorizedException } from '@libs/errors';
import { signToken } from '@libs/jwt';
import { comparePassword, hashPassword } from '@libs/password';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import  { Auth }  from '@entity/auth.entity';

// interface LoginInput {
//   email: string;
//   password: string;
//   token: string;
//   expiresIn: number
// }


export class AuthRepository {

  async loginUser (email: string, password: string){
    const user = await prisma.user.findUnique({ where: { email } });
  
    if (!user || !comparePassword(password, user.password))
      throw new UnauthorizedException('Incorrect credential');
  
    return signToken({ user: { id: user.id, email: user.email } });
  }
  
 
}





