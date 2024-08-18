'use client';

import React from 'react';
import AppLayout from '~/layouts/app-layout/app-layout';

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function layout({ children }: AuthLayoutProps) {
    return <AppLayout>{children}</AppLayout>;
}
