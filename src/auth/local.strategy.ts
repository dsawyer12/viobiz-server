import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

/*
 We can pass an options object in the call to super() to customize the behavior of the passport strategy.
 In this example, the passport-local strategy by default expects properties called username and password
 in the request body. Pass an options object to specify different property names, for example: super({ usernameField: 'email' })
 */

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> {
    console.log('local strategy validate()');
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
