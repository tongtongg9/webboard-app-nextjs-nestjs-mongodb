'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '~/lib/query-client';

interface QueryProviderProps {
    children: React.ReactNode;
}

export default function QueryProvider({ children }: QueryProviderProps) {
    // // NOTE: Avoid useState when initializing the query client if you don't
    // //       have a suspense boundary between this and the code that may
    // //       suspend because React will throw away the client on the initial
    // //       render if it suspends and there is no boundary
    // const queryClient = getQueryClient();

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
