import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Connection, Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    console.log('userService findOne()');
    this.userModel.findOne({ email: email }, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log('Result : ', docs);
      }
    });
    // const user = await this.userModel.collection('users').findOne({ email: args.email });
    // return this.users.find((user) => user.email === email);
    return null;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
