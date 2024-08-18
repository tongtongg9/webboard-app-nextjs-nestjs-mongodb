'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useProfile } from '../hooks/use-profile';
import { useAuthStore } from '../store/auth.store';
import { Button } from '~/components/ui/button';
import UserAvatar from '~/components/share/user-avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { toast } from '~/components/ui/use-toast';

export default function ProfileAvatar() {
    const router = useRouter();
    const { data: profile, isLoading } = useProfile();
    const { is_authenticated, logout } = useAuthStore((state) => state);

    const handleSignOut = () => {
        logout();
        router.refresh();
        toast({ title: 'Sign Out Success' });
    };

    if (!is_authenticated) return <Button onClick={() => router.push('/sign-in')}>Sign In</Button>;

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <UserAvatar name={`${profile?.first_name} ${profile?.last_name}`} isLoading={isLoading} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                        {profile?.first_name} {profile?.last_name}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem onClick={handleSignOut} className="text-destructive !hover:text-destructive">
                        Sign Out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
