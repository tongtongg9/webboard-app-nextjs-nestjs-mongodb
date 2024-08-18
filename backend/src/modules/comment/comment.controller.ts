import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Public } from '../auth/decorators/public.decorator';

@Controller('comments')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @Post()
    async create(@Body() createCommentDto: CreateCommentDto) {
        const newComment = await this.commentService.create(createCommentDto);

        return {
            message: 'Comment has been created successfully',
            result: newComment,
        };
    }

    @Public()
    @Get()
    async findAll() {
        const comments = await this.commentService.findAll();
        return { result: comments };
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const comment = await this.commentService.findById(id);
        return { result: comment };
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateCommentDto: UpdateCommentDto,
    ) {
        const result = await this.commentService.update(id, updateCommentDto);
        return { message: result };
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const result = await this.commentService.remove(id);
        return { message: result };
    }
}
