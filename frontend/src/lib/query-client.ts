// import { QueryClient, defaultShouldDehydrateQuery, isServer } from '@tanstack/react-query';

// import { AxiosError } from 'axios';
// import '@tanstack/react-query';

// declare module '@tanstack/react-query' {
//     interface Register {
//         defaultError: AxiosError;
//     }
// }

// function makeQueryClient() {
//     return new QueryClient({
//         defaultOptions: {
//             queries: {
//                 staleTime: 60 * 1000, // 1 minutes
//                 retry: 0,
//             },
//             mutations: {
//                 retry: 0,
//             },
//             dehydrate: {
//                 // include pending queries in dehydration
//                 shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
//             },
//         },
//     });
// }

// let browserQueryClient: QueryClient | undefined = undefined;

// export function getQueryClient() {
//     if (isServer) {
//         // Server: always make a new query client
//         return makeQueryClient();
//     } else {
//         // Browser: make a new query client if we don't already have one
//         // This is very important, so we don't re-make a new client if React
//         // suspends during the initial render. This may not be needed if we
//         // have a suspense boundary BELOW the creation of the query client
//         if (!browserQueryClient) browserQueryClient = makeQueryClient();
//         return browserQueryClient;
//     }
// }

import { QueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';
import '@tanstack/react-query';

declare module '@tanstack/react-query' {
    interface Register {
        defaultError: AxiosError;
    }
}

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000, // 1 minutes
            retry: 0,
        },
        mutations: {
            retry: 0,
        },
    },
});
