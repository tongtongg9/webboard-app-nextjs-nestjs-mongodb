import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schema/post.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }]),
    ],
    controllers: [PostController],
    providers: [PostService],
})
export class PostModule {}
