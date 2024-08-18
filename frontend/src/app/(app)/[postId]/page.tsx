import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { API_URL } from '~/lib/constants';
import { TPost } from '~/lib/types';
import CardPost from '~/features/post/components/card-post';
import CardComment from '~/features/comment/components/card-comment';
import BackButton from '~/components/share/back-button';
import CreateComment from '~/features/comment/components/create-comment';
import PostDetail from '~/features/post/components/post-detail';

interface PostDetailProps {
    params: { postId: string };
}

const fetchPostDetail = async (postId: string): Promise<TPost> => {
    const response = await fetch(`${API_URL}/posts/${postId}`, {
        method: 'GET',
        cache: 'no-cache',
    });

    if (!response.ok) {
        throw new Error('An error occurred while fetching the data');
    }

    const data = await response.json();

    return data;
};

export async function generateMetadata(
    { params: { postId } }: PostDetailProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // fetch data from API
    const post = await fetchPostDetail(postId);

    return {
        title: post.title,
        description: post.content,
        openGraph: {
            title: post.title,
            description: post.content,
            tags: post.community.name,
        },
    };
}

export default function Post({ params: { postId } }: PostDetailProps) {
    return (
        <div className="bg-white py-6 w-full h-full">
            <div className="space-y-8 px-4 md:px-6 w-full max-w-screen-lg container">
                <BackButton />

                <PostDetail postId={postId} />
            </div>
        </div>
    );
}
