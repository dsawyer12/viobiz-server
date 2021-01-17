import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

/*
secretOrKey: we are using the expedient option of supplying a symmetric secret for signing the token.
Other options, such as a PEM-encoded public key, may be more appropriate for production apps (see here for more information).
In any case, as cautioned earlier, do not expose this secret publicly.
 */

/*
It's also worth pointing out that this approach leaves us room ('hooks' as it were) to inject other business logic into the process.
For example, we could do a database lookup in our validate() method to extract more information about the user,
resulting in a more enriched user object being available in our Request. This is also the place we may decide to do further
token validation, such as looking up the userId in a list of revoked tokens, enabling us to perform token revocation.
The model we've implemented here in our sample code is a fast, "stateless JWT" model, where each API call is immediately
authorized based on the presence of a valid JWT, and a small bit of information about the requester (its userId and username) is available in our Request pipeline.
 */

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}