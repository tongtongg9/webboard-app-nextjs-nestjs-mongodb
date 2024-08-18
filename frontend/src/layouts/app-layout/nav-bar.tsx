'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import UserAvatarLoading from '~/components/share/user-avatar-loading';
import SidebarMobile from './sidebar-mobile';

const ProfileAvatar = dynamic(() => import('~/features/auth/components/profile-avatar'), {
    ssr: false,
    loading: () => <UserAvatarLoading />,
});

export default function NavBar() {
    return (
        <>
            <nav className="top-0 z-50 fixed bg-primary-500 w-dvw h-14">
                <div className="flex items-center mx-auto px-4 md:px-6 h-full">
                    <a href="#" className="font-castoro text-lg text-white italic">
                        a Board
                    </a>
                    <div className="md:block hidden ml-auto">
                        <ProfileAvatar />
                    </div>
                    <div className="block md:hidden ml-auto">
                        <SidebarMobile />
                    </div>
                </div>
            </nav>
        </>
    );
}
