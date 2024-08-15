import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PostDocument = Post & mongoose.Document;

@Schema({
    timestamps: true,
    collection: 'posts',
})
export class Post {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    content: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    author_id: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Community' })
    community_id: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);

PostSchema.index({ title: 'text', content: 'text' });
