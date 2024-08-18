import http from './http-common';
import { TCreateCommentResponse, TCreateComment } from '~/lib/types';

export const createComment = async (comment: TCreateComment) => {
    const response = await http.post<TCreateCommentResponse>('/comments', comment);
    return response;
};
