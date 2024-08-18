import React from 'react';
import QueryProvider from './query-provider';
import { Toaster } from '~/components/ui/toaster';

interface AppProviderProps {
    children: React.ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
    return (
        <>
            <QueryProvider>{children}</QueryProvider>
            <Toaster />
        </>
    );
}
