import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { User } from './user.model';
import { UsersService } from './users.service';
import { CreateUserInput } from './user.inputs';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  async user(@Args('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Mutation(() => User)
  async createUser(@Args('payload') payload: CreateUserInput) {
    return this.usersService.create(payload);
  }
}
