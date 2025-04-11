import React from 'react'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import useVideosApi from '../hooks/useVideosApi';
import Shimmer from './Shimmer';

const VideoContainer = () => {

  const videos = useVideosApi();

  return (videos?.length === 0) ? (<Shimmer />) : (
    <div className='md:m-6 grid grid-cols-12 gap-4 gap-y-8'>
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}
          className='col-span-12 sm:col-span-6 md:col-span-4'
          key={video.id}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer;