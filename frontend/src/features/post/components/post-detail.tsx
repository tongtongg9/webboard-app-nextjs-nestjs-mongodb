'use client';

import React from 'react';
import CardPost from './card-post';
import { usePostDetail } from '../hooks/use-post';
import CreateComment from '~/features/comment/components/create-comment';
import CardComment from '~/features/comment/components/card-comment';

interface PostDetailProps {
    postId: string;
}

export default function PostDetail({ postId }: PostDetailProps) {
    const { data: post, isLoading } = usePostDetail(postId);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return null;
    }

    return (
        <>
            <CardPost isDetail {...post} />

            <div className="space-y-2">
                <CreateComment postId={postId} />

                {post.comments?.map((comment) => (
                    <CardComment key={comment._id} {...comment} />
                ))}
            </div>
        </>
    );
}
