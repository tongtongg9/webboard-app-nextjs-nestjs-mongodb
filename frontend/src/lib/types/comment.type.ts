import { TUser } from './user.type';

export type TComment = {
    _id: string;
    post_id: string;
    content: string;
    author_id: string;
    author: TUser;
    createdAt: string;
    updatedAt: string;
};

export type TCreateComment = Pick<TComment, 'content' | 'post_id' | 'author_id'>;
export type TCreateCommentResponse = {
    message: string;
};
