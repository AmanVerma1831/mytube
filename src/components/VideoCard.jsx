import React from 'react';
import { formatDuration, formatViews, getTimeAgo } from '../utils/helpers';

const VideoCard = ({ info }) => {

    // console.log(info);
    const { statistics, snippet, contentDetails } = info;
    const { channelTitle, title, thumbnails, publishedAt } = snippet;
    // Channel thumbnail URL pattern (requires channelId)
    // const channelThumbnail = `https://yt3.ggpht.com/ytc/${channelId}=s88-c-k-c0x00ffffff-no-rj`;

    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <div className="w-full flex flex-col">
                <div className="relative">
                    <a href="#">
                        <img src={thumbnails.maxres?.url} className="w-full h-auto rounded-lg" alt={title} />
                    </a>

                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                        {formatDuration(contentDetails?.duration)}
                    </p>
                </div>

                <div className="flex flex-row mt-2 gap-2">
                    <a href="#">
                        <img
                            // src={channelThumbnail}
                            src="https://picsum.photos/seed/1/40/40"
                            className="rounded-full max-h-10 max-w-10" />
                    </a>
                    <div clas="flex flex-col">
                        <a href="#">
                            <p className="text-black text-md font-semibold line-clamp-2">{title}</p>
                        </a>
                        <a className="text-gray-700 text-sm font-semibold mt-2 hover:text-gray-100" href="#"> {channelTitle} </a>
                        <p className="text-gray-600 text-xs font-semibold mt-1">
                            {formatViews(statistics?.viewCount)} views . {getTimeAgo(publishedAt)}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VideoCard