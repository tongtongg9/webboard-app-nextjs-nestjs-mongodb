import { create } from 'zustand';

export type TCommunityStore = {
    filter_community_value: string | undefined;
    setFilterCommunityValue: (value: string) => void;
};

export const useCommunityStore = create<TCommunityStore>((set) => ({
    filter_community_value: '',
    setFilterCommunityValue: (value: string) => set({ filter_community_value: value === 'all' ? undefined : value }),
}));
