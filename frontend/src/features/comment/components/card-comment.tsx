import React from 'react';
import { TComment } from '~/lib/types';
import UserAvatar from '~/components/share/user-avatar';
import dayjs from '~/lib/dayjs';

interface CardCommentProps extends TComment {}

export default function CardComment({ author, createdAt, content }: CardCommentProps) {
    return (
        <div className="flex bg-white hover:bg-gray-50 py-4">
            <div className="block shrink-0">
                <UserAvatar name={`${author?.first_name} ${author?.last_name}`} />
            </div>
            <div className="space-y-2 px-2 w-full">
                <div className="flex items-end space-x-2">
                    <span className="font-semibold">{`${author?.first_name} ${author?.last_name}`}</span>
                    <span className="text-muted-foreground text-sm">{dayjs(createdAt).fromNow()}</span>
                </div>
                <p className="text-muted-foreground text-sm">{content}</p>
            </div>
        </div>
    );
}
