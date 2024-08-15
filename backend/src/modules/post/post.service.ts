import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDocument, Post } from './schema/post.schema';

@Injectable()
export class PostService {
    constructor(
        @InjectModel('Post') private readonly postModel: Model<PostDocument>,
    ) {}

    async create(createPostDto: CreatePostDto): Promise<Post> {
        const newPost = new this.postModel(createPostDto);
        return newPost.save();
    }

    async findAll(): Promise<Post[]> {
        const posts = await this.postModel
            .aggregate([
                {
                    $project: { __v: 0 },
                },
                // lookup author
                {
                    $lookup: {
                        from: 'users',
                        localField: 'author_id',
                        foreignField: '_id',
                        as: 'author',
                        pipeline: [
                            {
                                $project: {
                                    _id: 1,
                                    email: 1,
                                    first_name: 1,
                                    last_name: 1,
                                },
                            },
                        ],
                    },
                },
                { $unwind: '$author' },

                // lookup comments
                {
                    $lookup: {
                        from: 'communities',
                        localField: 'community_id',
                        foreignField: '_id',
                        as: 'community',
                        pipeline: [
                            {
                                $project: { _id: 1, name: 1 },
                            },
                        ],
                    },
                },
                { $unwind: '$community' },

                // lookup comments
                {
                    $lookup: {
                        from: 'comments',
                        localField: '_id',
                        foreignField: 'post_id',
                        as: 'comments',
                        pipeline: [
                            {
                                $project: {
                                    _id: 1,
                                    content: 1,
                                    createdAt: 1,
                                    updatedAt: 1,
                                    author_id: 1,
                                },
                            },
                            // lookup author of comment
                            {
                                $lookup: {
                                    from: 'users',
                                    localField: 'author_id',
                                    foreignField: '_id',
                                    as: 'author',
                                    pipeline: [
                                        {
                                            $project: {
                                                _id: 1,
                                                email: 1,
                                                first_name: 1,
                                                last_name: 1,
                                            },
                                        },
                                    ],
                                },
                            },
                            { $unwind: '$author' },
                        ],
                    },
                },
                {
                    $addFields: {
                        totalComments: { $size: '$comments' },
                    },
                },
            ])
            .exec();

        return posts;
    }

    async findById(id: string): Promise<Post | null> {
        const post = await this.postModel.findById(id).exec();
        if (!post) return null;
        return post;
    }

    async update(id: string, updatePostDto: UpdatePostDto) {
        const findPost = await this.findById(id);

        if (!findPost) {
            throw new NotFoundException('Post not found');
        }

        await this.postModel.updateOne({ _id: id }, updatePostDto).exec();

        return 'Post has been updated successfully';
    }

    async remove(id: string) {
        const findPost = await this.findById(id);

        if (!findPost) {
            throw new NotFoundException('Post not found');
        }

        await this.postModel.deleteOne({ _id: id }).exec();

        return 'Post has been deleted successfully';
    }
}
