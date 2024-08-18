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
import { useCommunityStore } from '../store/community.store';

export default function FilterWithCommunity() {
    const { data: communities, isLoading } = useCommunity();
    const { filter_community_value, setFilterCommunityValue } = useCommunityStore((state) => state);

    const handleSelectCommunity = async (community: string) => {
        setFilterCommunityValue(community);
    };

    if (isLoading) {
        return <div className="bg-gray-100 rounded-lg w-full max-w-[180px] h-10 animate-pulse"></div>;
    }

    return (
        <div>
            <Select onValueChange={(value) => handleSelectCommunity(value)} value={filter_community_value}>
                <SelectTrigger className="bg-transparent w-full max-w-[180px] font-bold">
                    <SelectValue placeholder="Community" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Select Community</SelectLabel>
                        <SelectItem value="all">All Community</SelectItem>
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
