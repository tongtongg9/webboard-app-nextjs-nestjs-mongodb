import React from 'react';
import FilterWithCommunity from '~/features/community/components/filter-with-community';
import CreatePost from '~/features/post/components/create-post';
import MyFeedPost from '~/features/post/components/my-feed-post';
import SearchPost from '~/features/post/components/search-post';

export default function OurBlog() {
    return (
        <div className="py-6 w-full">
            <div className="space-y-6 px-4 md:px-6 w-full max-w-screen-lg container">
                <div className="flex space-x-4 w-full">
                    <SearchPost />

                    <FilterWithCommunity />

                    <CreatePost />
                </div>

                <MyFeedPost />
            </div>
        </div>
    );
}
