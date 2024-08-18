'use client';

import { create } from 'zustand';
import { TUser } from '~/lib/types';

type TUserStore = {
    user: TUser | null;
};

type TUserStoreActions = {
    setUser: (user: TUser) => void;
};

export const useUserStore = create<TUserStore & TUserStoreActions>((set) => ({
    user: null,
    setUser: (user) => set((state) => ({ user: user || state.user })),
}));
