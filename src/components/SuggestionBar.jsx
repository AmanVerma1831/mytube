import React from 'react';
import { formatDuration, formatViews, getTimeAgo } from '../utils/helpers';

const SuggestionBar = ({ info }) => {

    // console.log(info);
    const { statistics, snippet, contentDetails } = info;
    const { channelTitle, title, thumbnails, publishedAt } = snippet;

    return (
        <div className="grid grid-cols-2 gap-2 my-3">
            <div className="col-span-1 relative">
                <div className='overflow-hidden rounded-lg'>
                    <img
                        src={thumbnails.medium?.url}
                        className="transition-transform duration-300 ease-in-out hover:scale-105"
                        alt={title}
                    />
                </div>
                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                    {formatDuration(contentDetails?.duration)}
                </p>
            </div>
            <div className='col-span-1'>
                <div clas="flex flex-col">
                    <p className="text-black text-sm font-semibold line-clamp-2">{title}</p>
                    <p className="text-gray-700 text-xs font-semibold mt-2"> {channelTitle} </p>
                    <p className="text-gray-600 text-xs font-semibold mt-1">
                        {formatViews(statistics?.viewCount)} views . {getTimeAgo(publishedAt)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SuggestionBar;