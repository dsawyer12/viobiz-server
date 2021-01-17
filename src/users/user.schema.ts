import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  _id: string;
  @Prop()
  f_name: string;
  @Prop()
  l_name: string;
  @Prop()
  email: string;
  @Prop()
  pswd: string;
  @Prop()
  createdAt: string;
  @Prop()
  updateAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
