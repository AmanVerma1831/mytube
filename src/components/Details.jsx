import React, { useState } from 'react'
import useVideoDetails from '../hooks/useVideoDetails';
import { formatViews, getTimeAgo } from '../utils/helpers';
import useVidComments from '../hooks/useVidComments';
import Comments from './Comments';
import useChannelThumb from '../hooks/useChannelThumb';

const Details = ({ id }) => {

    // console.log("Details page : " + id);
    const [show, setShow] = useState(false);
    const { videoDetails, loading } = useVideoDetails(id);
    const videoComments = useVidComments(id);
    const { thumbnail, loading: thumbLoading } = useChannelThumb(videoDetails?.snippet?.channelId);

    if (loading || thumbLoading) return <div className="p-4">Loading details...</div>;
    if (!videoDetails) return null;

    const { statistics, snippet } = videoDetails;
    const { channelTitle, title, publishedAt, description } = snippet;
    const { viewCount, likeCount, commentCount } = statistics;

    const channelThumbnail = thumbnail?.medium?.url;

    return (
        <div className='my-4'>
            <section className='mb-4'>
                <h1 className='font-bold md:text-2xl my-2 line-clamp-2'>{title}</h1>
                <div className='md:flex justify-between items-center'>
                    <div className='flex'>
                        <div className='flex mr-6'>
                            <img
                                src={channelThumbnail}
                                className="w-10 h-10 rounded-full mr-3 border-2 border-blue-600"
                            />
                            <div>
                                <p className="font-medium">{channelTitle}</p>
                                <p className="text-xs text-gray-500">1.2M subscribers</p>
                            </div>
                        </div>
                        <button
                            className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-white hover:border-2 hover:border-red-600 hover:text-red-600 cursor-pointer"
                        >
                            Subscribe
                        </button>
                    </div>
                    <div className="flex space-x-2 py-4 md:p-0">
                        <button className="flex items-center space-x-1 px-5 py-1 bg-gray-300 hover:bg-gray-400 rounded-full">
                            <span className=''>👍</span>
                            <span>{formatViews(likeCount)}</span>
                        </button>
                        <button className="flex items-center space-x-1 px-5 py-1 bg-gray-300 hover:bg-gray-400 rounded-full">
                            <span>👎</span>
                        </button>
                        <button className="flex items-center space-x-1 px-5 py-1 bg-gray-300 hover:bg-gray-400 rounded-full">
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
                <p className={`my-4 text-sm whitespace-pre-line ${show ? " " : "line-clamp-4"}`}>{description}</p>
                <button className='bg-gray-400 py-1 px-4 border rounded-full mb-4 cursor-pointer hover:bg-gray-800 hover:text-white'
                    onClick={() => setShow(!show)}
                >
                    {show ? "Show Less" : "Show More"}
                </button>
            </section>
            <section>
                <p className='font-bold text-xl'>{commentCount} Comments</p>
                <div>
                    {videoComments.map((comment) => {
                        return <Comments key={comment.id} data={comment.snippet} />
                    })}
                </div>
            </section>
        </div>
    )
}

export default Details