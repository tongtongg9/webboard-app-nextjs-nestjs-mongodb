import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDocument } from './schema/post.schema';
import { CommentDocument } from '../comment/schema/comment.schema';
import { parseObjectId } from '~/utils';
import { QueryPostDto } from './dto/query-post.dto';
import { isEmpty } from 'lodash';

@Injectable()
export class PostService {
    constructor(
        @InjectModel('Post') private readonly postModel: Model<PostDocument>,
        @InjectModel('Comment')
        private readonly commentModel: Model<CommentDocument>,
    ) {}

    async create(createPostDto: CreatePostDto): Promise<PostDocument> {
        const newPost = new this.postModel(createPostDto);
        return newPost.save();
    }

    async findAll(queryPostDto: QueryPostDto): Promise<PostDocument[]> {
        const community = parseObjectId(queryPostDto.community);
        const author = parseObjectId(queryPostDto.author);

        const _match = Object.assign(
            {},
            !isEmpty(queryPostDto.community) && { community_id: community },
            !isEmpty(queryPostDto.author) && { author_id: author },
        );

        const posts = await this.postModel
            .aggregate([
                {
                    $match: _match,
                },
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
                                    username: 1,
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
                                                username: 1,
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
                        total_comments: { $size: '$comments' },
                    },
                },
                {
                    $sort: { createdAt: -1 },
                },
            ])
            .exec();

        return posts;
    }

    async findById(id: string): Promise<PostDocument | null> {
        const post = await this.postModel
            .aggregate([
                { $match: { _id: parseObjectId(id) } },
                { $project: { __v: 0 } },

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
                                    username: 1,
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
                                                username: 1,
                                                first_name: 1,
                                                last_name: 1,
                                            },
                                        },
                                    ],
                                },
                            },
                            { $unwind: '$author' },
                            {
                                $sort: { createdAt: -1 },
                            },
                        ],
                    },
                },
                {
                    $addFields: {
                        total_comments: { $size: '$comments' },
                    },
                },
            ])
            .exec();

        if (post.length === 0) return null;

        return post[0];
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
        await this.commentModel.deleteMany({ post_id: id }).exec();

        return 'Post has been deleted successfully';
    }
}
