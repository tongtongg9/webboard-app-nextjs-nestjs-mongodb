'use client';

import React, { useCallback } from 'react';
import { House, SquarePen } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { useSignInFirst } from '~/features/auth/hooks/use-sign-in-first';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '~/lib/utils';

const SIDEBAR_MENU = [
    {
        title: 'Home',
        href: '/',
        icon: <House className="mr-2" />,
    },
    {
        title: 'Our Blog',
        href: '/our-blog',
        icon: <SquarePen className="mr-2" />,
    },
];

interface SidebarMenuProps {
    menuColor?: 'white' | 'primary';
}

const MENU_COLOR = {
    primary: 'text-primary-500',
    white: 'text-white',
};

export default function SidebarMenu({ menuColor = 'primary' }: SidebarMenuProps) {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = useCallback(
        (href: string) => {
            return pathname === href;
        },
        [pathname]
    );
    const handleLinkClick = () => {
        router.push(SIDEBAR_MENU.find((m) => m.href === '/our-blog')!.href);
    };

    const { AlertComponent, handleAction } = useSignInFirst(handleLinkClick);

    return (
        <>
            <ul className="space-y-2 px-2 py-6">
                {SIDEBAR_MENU.map((item) => (
                    <li key={item.title}>
                        <Button
                            variant="link"
                            className={cn(
                                MENU_COLOR[menuColor],
                                'inline-flex justify-start items-center rounded-none w-full font-inter',
                                isActive(item.href) ? 'font-bold' : ''
                            )}
                            onClick={item.href === '/our-blog' ? handleAction : () => router.push(item.href)}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </Button>
                    </li>
                ))}
            </ul>
            {AlertComponent}
        </>
    );
}
