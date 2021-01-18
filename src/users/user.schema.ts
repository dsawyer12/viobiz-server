import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'users' })
export class User {
  @Prop({ required: true })
  _id: string;
  @Prop()
  f_name: string;
  @Prop()
  l_name: string;
  @Prop({ required: true })
  email: string;
  @Prop()
  pswd: string;
  @Prop()
  createdAt: Date;
  @Prop()
  updateAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
