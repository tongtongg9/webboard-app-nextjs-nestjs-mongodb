import React from 'react';
import { getInitials } from '~/lib/utils';
import UserAvatarLoading from './user-avatar-loading';

interface UserAvatarProps {
    name?: string;
    isLoading?: boolean;
}

export default function UserAvatar({ name = '', isLoading }: UserAvatarProps) {
    if (isLoading) return <UserAvatarLoading />;

    return (
        <div className="flex justify-center items-center bg-primary-100 rounded-full w-10 h-10 text-primary">
            {getInitials(name)}
        </div>
    );
}
