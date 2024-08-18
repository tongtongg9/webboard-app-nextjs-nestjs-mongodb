'use client';

import React from 'react';
import SidebarMenu from './sidebar-menu';

export default function Sidebar() {
    return (
        <>
            <aside
                className="md:block hidden bg-primary-100 md:w-[280px]"
                style={{
                    position: 'fixed',
                    top: '3.5rem',
                    left: 0,
                    bottom: 0,
                }}
            >
                <SidebarMenu />
            </aside>
        </>
    );
}
