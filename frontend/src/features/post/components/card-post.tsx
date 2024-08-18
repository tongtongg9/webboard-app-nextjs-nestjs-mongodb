'use client';

import { MessageCircle, PenLine, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import UserAvatar from '~/components/share/user-avatar';
import { Badge } from '~/components/ui/badge';
import { TPost } from '~/lib/types';
import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';
import { usePostStore } from '../store/post.store';
import Highlighter from 'react-highlight-words';

interface CardPostProps extends TPost {
    isDetail?: boolean;
    isOwner?: boolean;
}

export default function CardPost({
    _id,
    author,
    community,
    title,
    content,
    total_comments,
    isDetail,
    isOwner,
}: CardPostProps) {
    const { setEditPost, setDeletePost, search } = usePostStore((state) => state);

    const PostWrapper = ({ children }: { children: React.ReactNode }) => (
        <div className={cn('space-y-4 bg-white relative', !isDetail && 'hover:bg-gray-50 p-5')}>
            {children}

            <div className="top-0.5 right-4 absolute space-x-0.5" style={{ display: isOwner ? 'block' : 'none' }}>
                <Button variant="ghost" size="icon" onClick={() => setEditPost(_id, true)}>
                    <PenLine className="w-5 h-5 text-primary-300" />
                    <span className="sr-only">edit</span>
                </Button>

                <Button variant="ghost" size="icon" onClick={() => setDeletePost(_id, true)}>
                    <Trash2 className="w-5 h-5 text-primary-300" />
                    <span className="sr-only">delete</span>
                </Button>
            </div>
        </div>
    );

    const PostDetail = () => (
        <div className="space-y-4">
            <div className="flex">
                <div className="inline-flex items-center space-x-2 grow">
                    <UserAvatar name={`${author?.first_name} ${author?.last_name}`} />
                    <span className="font-semibold text-muted-foreground">{`${author?.first_name} ${author?.last_name}`}</span>
                </div>
            </div>

            <div>
                <Badge variant="secondary" className="text-base">
                    {community?.name}
                </Badge>
            </div>

            <article>
                <h4 className="mb-2 font-bold text-xl">
                    <Highlighter
                        highlightClassName="bg-gold-500"
                        searchWords={search.split(' ')}
                        autoEscape={true}
                        textToHighlight={title}
                    />
                </h4>
                <p className={cn('line-clamp-2 text-base text-muted-foreground', isDetail && 'line-clamp-none')}>
                    <Highlighter
                        highlightClassName="bg-gold-500"
                        searchWords={search.split(' ')}
                        autoEscape={true}
                        textToHighlight={content}
                    />
                </p>
            </article>
        </div>
    );

    return (
        <PostWrapper>
            {isDetail ? (
                <PostDetail />
            ) : (
                <Link href={`/${_id}`}>
                    <PostDetail />
                </Link>
            )}

            <div className="inline-flex items-center space-x-2 text-muted-foreground">
                <MessageCircle className="w-5" /> <span>{total_comments || 0} Comments</span>
            </div>
        </PostWrapper>
    );
}
