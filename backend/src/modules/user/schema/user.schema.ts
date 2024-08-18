import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type UserDocument = User & mongoose.Document;

@Schema({
    timestamps: true,
    collection: 'users',
})
export class User {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop()
    first_name: string;

    @Prop()
    last_name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
