import React from 'react'
import useVideoDetails from '../utils/useVideoDetails';
import { formatViews, getTimeAgo } from '../utils/helpers';

const Details = ({ id }) => {

    // console.log("Details page : " + id);
    const videoDetails = useVideoDetails(id);
    const { statistics, snippet } = videoDetails;
    const { channelTitle, title, publishedAt, description } = snippet;
    const { viewCount, likeCount } = statistics;

    if (!videoDetails) return null;

    return (
        <div className='my-2'>
            <section className='mb-4'>
                <h1 className='font-bold text-2xl my-2'>{title}</h1>
                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <div className='flex mr-6'>
                            <img
                                // src={channelThumbnail}
                                src="https://picsum.photos/seed/1/40/40"
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            <div>
                                <p className="font-medium">{channelTitle}</p>
                                <p className="text-xs text-gray-500">1.2M subscribers</p>
                            </div>
                        </div>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700">
                            Subscribe
                        </button>
                    </div>
                    <div className="flex space-x-2">
                        <button className="flex items-center space-x-1 px-5 py-1 bg-gray-200 rounded-full">
                            <span className=''>👍</span>
                            <span>{formatViews(likeCount)}</span>
                        </button>
                        <button className="flex items-center space-x-1 px-5 py-1 bg-gray-200 rounded-full">
                            <span>👎</span>
                        </button>
                        <button className="flex items-center space-x-1 px-5 py-1 bg-gray-200 rounded-full">
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-gray-200 p-3 rounded-xl mb-4">
                <div className="flex space-x-4">
                    <span className="text-sm font-medium">
                        {formatViews(viewCount)} views
                    </span>
                    <span className="text-sm font-medium">
                        {getTimeAgo(publishedAt)}
                    </span>
                </div>
                <p className="my-4 text-sm whitespace-pre-line line-clamp-4">{description}</p>
            </section>
            <section>
                comments
            </section>
        </div>
    )
}

export default Details