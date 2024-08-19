'use client';

import { SearchIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Input } from '~/components/ui/input';
import { usePostStore } from '../store/post.store';
import { useDebounce } from '@uidotdev/usehooks';

export default function SearchPost() {
    const { setSearch } = usePostStore((state) => state);
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearch = useDebounce(searchValue, 300);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value), []);

    useEffect(() => {
        if (debouncedSearch) {
            // change search state after debounce
            setSearch(debouncedSearch);
        } else {
            // reset search state
            setSearch('');
        }
    }, [debouncedSearch, setSearch]);

    return (
        <div className="relative flex-1">
            <SearchIcon className="top-3 left-3 absolute w-4 h-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search..."
                className="flex-1 border-2 border-primary-foreground bg-transparent pl-8 w-full"
                value={searchValue}
                onChange={handleChange}
            />
        </div>
    );
}
