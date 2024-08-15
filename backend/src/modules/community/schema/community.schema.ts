import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CommunityDocument = Community & mongoose.Document;

@Schema({
    timestamps: true,
    collection: 'communities',
})
export class Community {
    @Prop({ required: true, unique: true })
    name: string;
}

export const CommunitySchema = SchemaFactory.createForClass(Community);
