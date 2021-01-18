import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

/*
 Of course in a real application, you wouldn't store a password in plain text.
 You'd instead use a library like bcrypt, with a salted one-way hash algorithm.
 With that approach, you'd only store hashed passwords, and then compare the stored
 password to a hashed version of the incoming password, thus never storing or exposing user passwords in plain text.
 */

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    console.log('authService validateUser()');
    const user = await this.userService.findOne(email);
    if (user && user.pswd === pass) {
      const { pswd, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log('authService login()');
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
