import http from './http-common';
import { TCreatePostResponse, TPost, TCreatePostPayload } from '~/lib/types';

type TQueryPost = Record<string, unknown>;

export const getPosts = (params?: TQueryPost) => {
    return http.get<TPost[]>('/posts', { params: { ...params } });
};

export const getMyPosts = (params?: TQueryPost) => {
    return http.get<TPost[]>('/posts/me', { params: { ...params } });
};

export const getPost = (id: string) => {
    return http.get<TPost>(`/posts/${id}`);
};

export const createPost = (data: TCreatePostPayload) => {
    return http.post<TCreatePostResponse>('/posts', data);
};

export const updatePost = ({ _id, ...payload }: TCreatePostPayload) => {
    return http.patch<TCreatePostResponse>(`/posts/${_id}`, payload);
};

export const deletePost = (id: string) => {
    return http.delete<TCreatePostResponse>(`/posts/${id}`);
};