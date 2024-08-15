import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    async create(@Body() createPostDto: CreatePostDto) {
        const newPost = await this.postService.create(createPostDto);

        return {
            message: `Post has been created successfully`,
            result: newPost,
        };
    }

    @Get()
    async findAll() {
        const posts = await this.postService.findAll();
        return { result: posts };
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const post = await this.postService.findById(id);
        return { result: post };
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updatePostDto: UpdatePostDto,
    ) {
        const result = await this.postService.update(id, updatePostDto);
        return { message: result };
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const result = await this.postService.remove(id);
        return { message: result };
    }
}
