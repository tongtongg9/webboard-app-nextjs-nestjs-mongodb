'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from '~/components/ui/use-toast';
import { useCommunityStore } from '~/features/community/store/community.store';
import { queryClient } from '~/lib/query-client';
import { createPost, getPosts, getPost, getMyPosts, updatePost, deletePost } from '~/services/post.service';
import { useAuthStore } from '~/features/auth/store/auth.store';
import { usePostStore } from '../store/post.store';

export function usePosts() {
    const filter_community_value = useCommunityStore((state) => state.filter_community_value);
    const { search } = usePostStore((state) => state);

    return useQuery({
        queryKey: ['posts', filter_community_value, search],
        queryFn: async ({ queryKey }) => {
            const [, community_name, search] = queryKey;
            const params = { community: community_name || undefined, search: search || undefined };

            return getPosts(params);
        },
        select: (data) => data.data,
    });
}

export function useMyPosts() {
    const filter_community_value = useCommunityStore((state) => state.filter_community_value);
    const { search } = usePostStore((state) => state);

    return useQuery({
        queryKey: ['my-posts', filter_community_value, search],
        queryFn: async ({ queryKey }) => {
            const [, community_name, search] = queryKey;
            const params = { community: community_name || undefined, search: search || undefined };

            return getMyPosts(params);
        },
        select: (data) => data.data,
    });
}

export function usePostDetail(postId: string) {
    return useQuery({
        queryKey: ['post', postId],
        enabled: !!postId,
        staleTime: 0,
        queryFn: async ({ queryKey }) => {
            const [, postId] = queryKey;
            return getPost(postId);
        },
        select: (data) => data.data,
    });
}

export function useCreatePost() {
    const { is_authenticated } = useAuthStore((state) => state);

    return useMutation({
        mutationKey: ['create-post'],
        mutationFn: createPost,
        onSuccess: async (data) => {
            toast({ title: data.data.message });
            await queryClient.invalidateQueries({ queryKey: ['posts'] });

            if (is_authenticated) {
                await queryClient.invalidateQueries({ queryKey: ['my-posts'] });
            }
        },
        onError: (error) => {
            toast({
                title: 'Post has not been created',
                description: error?.message || 'An error occurred',
                variant: 'destructive',
            });
        },
    });
}

export function useEditPost() {
    return useMutation({
        mutationKey: ['edit-post'],
        mutationFn: updatePost,
        onSuccess: async (data, variable) => {
            toast({ title: data.data.message });
            await queryClient.invalidateQueries({ queryKey: ['posts'] });
            await queryClient.invalidateQueries({ queryKey: ['my-posts'] });
            await queryClient.invalidateQueries({ queryKey: ['post', variable._id] });
        },
        onError: (error) => {
            toast({
                title: 'Post has not been edited',
                description: error?.message || 'An error occurred',
                variant: 'destructive',
            });
        },
    });
}

export function useDeletePost() {
    return useMutation({
        mutationKey: ['delete-post'],
        mutationFn: deletePost,
        onSuccess: async (data) => {
            toast({ title: data.data.message });
            await queryClient.invalidateQueries({ queryKey: ['posts'] });
            await queryClient.invalidateQueries({ queryKey: ['my-posts'] });
        },
        onError: (error) => {
            toast({
                title: 'Post has not been deleted',
                description: error?.message || 'An error occurred',
                variant: 'destructive',
            });
        },
    });
}
