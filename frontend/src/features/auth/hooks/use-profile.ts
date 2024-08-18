'use client';

import { useQuery } from '@tanstack/react-query';
import { getProfile } from '~/services/auth.service';
import { useAuthStore } from '../store/auth.store';
import { useRouter } from 'next/navigation';
import { useUserStore } from '../store/user.store';
import { useEffect } from 'react';

export function useProfile() {
    const router = useRouter();
    const { is_authenticated, logout } = useAuthStore((state) => state);
    const { setUser } = useUserStore((state) => state);

    const profileQuery = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
        enabled: is_authenticated,
        select: (data) => data.data,
        throwOnError: (error) => {
            logout();
            router.replace('/sign-in');
            throw error;
        },
    });

    useEffect(() => {
        if (profileQuery.isSuccess) {
            setUser(profileQuery.data);
        }
    }, [profileQuery.data]);

    return profileQuery;
}
