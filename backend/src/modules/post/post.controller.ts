import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
    Request,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Public } from '~/modules/auth/decorators/public.decorator';
import { QueryPostDto } from './dto/query-post.dto';
import { AccessTokenPayload } from '../auth/types/access-token-payload';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    async create(@Body() createPostDto: CreatePostDto) {
        await this.postService.create(createPostDto);

        return {
            message: `Post has been created successfully`,
        };
    }

    @Public()
    @Get()
    async findAll(@Query() queryPostDto: QueryPostDto) {
        const posts = await this.postService.findAll(queryPostDto);
        return posts;
    }

    @Get('me')
    async findMyPosts(
        @Request() req: { user: AccessTokenPayload },
        @Query() queryPostDto: QueryPostDto,
    ) {
        const posts = await this.postService.findAll({
            ...queryPostDto,
            author: req.user.id,
        });
        return posts;
    }

    @Public()
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const post = await this.postService.findById(id);
        return post;
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
