import React from 'react';
import NavBar from './nav-bar';
import Sidebar from './sidebar';

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="relative bg-primary-100 min-h-dvh">
            <NavBar />
            <div className="flex mx-auto pt-14 w-full min-h-dvh">
                <Sidebar />
                <main className="ml-0 md:ml-[280px] w-full">{children}</main>
            </div>
        </div>
    );
}
