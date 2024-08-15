import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { encryptPassword } from '~/utils';

export type UserDocument = User & mongoose.Document;

@Schema({
    timestamps: true,
    collection: 'users',
})
export class User {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    first_name: string;

    @Prop()
    last_name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const password = this.get('password');
    const password_hashed = await encryptPassword(password);

    this.password = password_hashed;

    next();
});
