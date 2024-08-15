import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentDocument } from './schema/comment.schema';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel('Comment')
        private readonly commentModel: Model<CommentDocument>,
    ) {}

    async create(createCommentDto: CreateCommentDto) {
        const newComment = new this.commentModel(createCommentDto);
        return newComment.save();
    }

    async findAll() {
        const comments = await this.commentModel.find().exec();
        return comments;
    }

    async findById(id: string) {
        const comment = await this.commentModel.findById(id).exec();

        if (!comment) {
            throw new NotFoundException('Comment not found');
        }

        return comment;
    }

    async update(id: string, updateCommentDto: UpdateCommentDto) {
        await this.findById(id);

        await this.commentModel
            .updateOne({ _id: id }, { $set: updateCommentDto })
            .exec();

        return `Comment has been updated successfully`;
    }

    async remove(id: string) {
        await this.findById(id);

        await this.commentModel.deleteOne({ _id: id }).exec();

        return `Comment has been deleted successfully`;
    }
}
