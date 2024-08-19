import React from 'react';
import FilterWithCommunity from '~/features/community/components/filter-with-community';
import CreatePost from '~/features/post/components/create-post';
import MyFeedPost from '~/features/post/components/my-feed-post';
import SearchPost from '~/features/post/components/search-post';

export default function OurBlog() {
    return (
        <div className="py-6 w-full">
            <div className="space-y-6 px-4 md:px-6 w-full max-w-screen-lg container">
                <div className="flex md:flex-row flex-col gap-4 w-full">
                    <SearchPost />

                    <div className="inline-flex gap-2 ml-auto">
                        <FilterWithCommunity />

                        <CreatePost />
                    </div>
                </div>

                <MyFeedPost />
            </div>
        </div>
    );
}
