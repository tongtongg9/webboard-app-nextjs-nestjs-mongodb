'use client';

import React from 'react';
import CardPost from './card-post';
import { usePosts } from '../hooks/use-post';

export default function FeedPost() {
    const { data: posts, isLoading, isFetched } = usePosts();

    if (isLoading) return <div>Loading...</div>;

    if (isFetched && (!posts || posts.length === 0)) return <div>No posts found</div>;

    return (
        <div className="shadow-md rounded-lg divide-y overflow-hidden">
            {posts?.map((post) => (
                <CardPost key={post!._id} {...post} />
            ))}
        </div>
    );
}
