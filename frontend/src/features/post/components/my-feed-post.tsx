'use client';

import React from 'react';
import CardPost from './card-post';
import { useMyPosts } from '../hooks/use-post';
import { useUserStore } from '~/features/auth/store/user.store';
import { usePostStore } from '../store/post.store';
import DialogFormPost from './dialog-form-post';
import DialogDeletePost from './dialog-delete-post';

export default function MyFeedPost() {
    const user = useUserStore((state) => state.user);
    const { editPost, setEditPost } = usePostStore((state) => state);

    const { data: posts, isLoading, isFetched } = useMyPosts();

    if (isLoading) return <div>Loading...</div>;

    if (isFetched && (!posts || posts.length === 0)) return <div>No posts found</div>;

    return (
        <>
            <div className="shadow-md rounded-lg divide-y overflow-hidden">
                {posts?.map((post) => (
                    <CardPost {...post} key={post!._id} isOwner={user?.username === post?.author.username} />
                ))}
            </div>

            <DialogFormPost
                type="edit"
                open={editPost.open}
                setOpen={(open) => {
                    if (!open) setEditPost('', open);
                    else setEditPost(editPost.id, open);
                }}
                postId={editPost.id}
            />

            <DialogDeletePost />
        </>
    );
}
