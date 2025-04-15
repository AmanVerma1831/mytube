import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import SearchVideoCard from './SearchVideoCard';
import { openMenu } from '../redux/appSlice';

const SearchVideoContainer = () => {

    const searchVideos = useSelector(store => store.video.searchVideos);
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(openMenu());
    }, [dispatch])

    return (searchVideos?.length === 0) ? (<Shimmer />) :
        (
            <div className="flex flex-col w-full md:ml-10">
                <p className="w-full font-bold text-lg mb-4">Search Results for :
                    <span className="text-red-600 italic"> {searchParams.get('search_query')}</span></p>
                {searchVideos.map((video, index) => {
                    const videoId = video.id?.videoId || video.id;
                    return (
                        <Link
                            to={`/watch?v=${videoId}`}
                            key={`${videoId}-${index}`}
                            className='mb-4'
                        >
                            {/* thumbnail title,channelTitle,publishedat,viewcount */}
                            <SearchVideoCard
                                id={videoId}
                                thumbnail={video?.snippet?.thumbnails?.medium?.url}
                                title={video?.snippet?.title}
                                channelTitle={video?.snippet?.channelTitle}
                                description={video?.snippet?.description}

                            />
                        </Link>
                    );
                })}
            </div>
        )
}

export default SearchVideoContainer