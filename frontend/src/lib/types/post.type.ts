import { TComment } from './comment.type';
import { TCommunity } from './community.type';
import { TUser } from './user.type';

export type TPost = {
    _id: string;
    title: string;
    content: string;
    author_id: string;
    community_id: string;
    author: TUser;
    community: TCommunity;
    comments: TComment[];
    total_comments: number;
    createdAt: string;
    updatedAt: string;
};

export type TCreatePostPayload = Pick<TPost, 'title' | 'content' | 'community_id' | 'author_id' | '_id'>;
export type TCreatePostResponse = {
    message: string;
};
