'use client';

import { useQuery } from '@tanstack/react-query';
import { getCommunities } from '~/services/community.service';

export function useCommunity() {
    return useQuery({
        queryKey: ['communities'],
        queryFn: getCommunities,
        select: (data) => data.data,
        staleTime: 1000 * 60 * 60 * 1, // 1 hour
    });
}
