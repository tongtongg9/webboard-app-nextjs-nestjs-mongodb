'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useProfile } from '~/features/auth/hooks/use-profile';

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    const router = useRouter();
    const { data: profile, isFetched } = useProfile();

    // useEffect(() => {
    //     if (profile && isFetched) {
    //         router.replace('/');
    //     }
    // }, [profile, router]);

    return children;
}
