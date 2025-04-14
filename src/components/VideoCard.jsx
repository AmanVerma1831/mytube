import React from 'react';
import { formatDuration, formatViews, getTimeAgo } from '../utils/helpers';
import useChannelThumb from '../hooks/useChannelThumb';

const VideoCard = ({ info }) => {

    // console.log(info);
    const { statistics, snippet, contentDetails } = info;
    const { channelTitle, title, thumbnails, publishedAt, channelId } = snippet;

    const { thumbnail, loading } = useChannelThumb(channelId);
    if (loading) return <div className="p-4">Loading details...</div>;
    const channelThumbnail = thumbnail?.medium?.url;


    return (
        <div className="w-full flex flex-col">
            <div className="relative">
                <div className='md:w-100 md:h-56 overflow-hidden md:rounded-lg'>
                    <img src={thumbnails.high?.url}
                        className="object-none transition-transform duration-300 ease-in-out hover:scale-105"
                        alt={title}
                    />
                </div>
                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                    {formatDuration(contentDetails?.duration)}
                </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 mx-2 md:mx-0">
                <img
                    src={channelThumbnail}
                    className="rounded-full h-10 w-10 border-2 border-blue-600"
                />
                <div clas="flex flex-col">
                    <p className="text-black text-md font-semibold line-clamp-2">{title}</p>
                    <p className="text-gray-700 text-sm font-semibold mt-2"> {channelTitle} </p>
                    <p className="text-gray-600 text-xs font-semibold mt-1">
                        {formatViews(statistics?.viewCount)} views . {getTimeAgo(publishedAt)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard