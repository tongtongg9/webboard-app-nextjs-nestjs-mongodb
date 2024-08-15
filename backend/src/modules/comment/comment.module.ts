import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './schema/comment.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }]),
    ],
    controllers: [CommentController],
    providers: [CommentService],
})
export class CommentModule {}
