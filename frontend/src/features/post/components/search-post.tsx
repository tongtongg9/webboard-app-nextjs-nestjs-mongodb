'use client';

import { SearchIcon } from 'lucide-react';
import React from 'react';
import { Input } from '~/components/ui/input';
import { usePostStore } from '../store/post.store';

export default function SearchPost() {
    const { search, setSearch } = usePostStore((state) => state);

    return (
        <div className="relative flex-1 mr-auto grow-0 md:grow">
            <SearchIcon className="top-3 left-3 absolute w-4 h-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search..."
                className="flex-1 border-2 border-primary-foreground bg-transparent pl-8 w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}
