import { create } from 'zustand';

type TPostStore = {
    search: string;
    setSearch: (search: string) => void;
    editPost: { id: string; open: boolean };
    setEditPost: (id: string, open: boolean) => void;
    deletePost: { id: string; open: boolean };
    setDeletePost: (id: string, open: boolean) => void;
};

export const usePostStore = create<TPostStore>((set) => ({
    search: '',
    setSearch: (search) => set({ search }),
    editPost: { id: '', open: false },
    setEditPost: (id, open) => set({ editPost: { id, open } }),
    deletePost: { id: '', open: false },
    setDeletePost: (id, open) => set({ deletePost: { id, open } }),
}));
