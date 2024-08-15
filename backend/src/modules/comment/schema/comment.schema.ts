import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CommentDocument = Comment & mongoose.Document;

@Schema({
    timestamps: true,
    collection: 'comments',
})
export class Comment {
    @Prop({ required: true })
    content: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    author_id: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
    post_id: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
