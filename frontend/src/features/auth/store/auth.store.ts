'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type AuthStates = {
    _tk: string | null;
    is_authenticated: boolean;
};

export type AuthActions = {
    setToken: (token: string) => void;
    setAuth: (is_authenticated: boolean) => void;
    logout: () => void;
};

export const useAuthStore = create(
    persist<AuthStates & AuthActions>(
        (set) => ({
            _tk: null,
            is_authenticated: false,
            setToken: (token) => set(() => ({ _tk: token, is_authenticated: !!token })),
            setAuth: (is_authenticated) => set((prev) => ({ is_authenticated, _tk: prev._tk })),
            logout: () => set(() => ({ _tk: null, is_authenticated: false })),
        }),
        {
            name: 'auth-a-board',
        }
    )
);
