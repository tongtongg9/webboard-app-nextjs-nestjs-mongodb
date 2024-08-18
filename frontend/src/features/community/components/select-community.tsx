'use client';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select';
import { useCommunity } from '../hooks/use-community';
import { useCallback } from 'react';

interface SelectCommunityProps {
    onSelectCommunity: (community: string) => void;
    value: string;
}

export default function SelectCommunity({ value, onSelectCommunity }: SelectCommunityProps) {
    const { data: communities, isLoading } = useCommunity();

    const handleSelectCommunity = useCallback((community: string) => {
        onSelectCommunity(community);
    }, []);

    if (isLoading) {
        return <div className="bg-gray-100 rounded-lg w-full max-w-[180px] h-10 animate-pulse"></div>;
    }

    return (
        <div>
            <Select onValueChange={handleSelectCommunity} value={value}>
                <SelectTrigger className="bg-transparent w-full max-w-full md:max-w-[180px] font-bold">
                    <SelectValue placeholder="Community" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Select Community</SelectLabel>
                        {communities?.map((community) => (
                            <SelectItem key={community?._id} value={community._id}>
                                {community.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}
