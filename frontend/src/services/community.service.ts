import { TCommunity } from '~/lib/types';
import http from './http-common';

export const getCommunities = () => {
    return http.get<TCommunity[]>('/community');
};
