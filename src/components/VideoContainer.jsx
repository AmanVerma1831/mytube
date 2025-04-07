import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/config';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideosinfo();
  }, []);

  const getVideosinfo = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data?.json();
      // console.log(json?.items);
      setVideos(json?.items || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setVideos([]);
    }
  }

  return (
    <div className='m-6 grid grid-cols-12 gap-4 gap-y-8'>
      {videos.map((video) => (
        <VideoCard info={video} key={video.id} />
      ))}
    </div>
  )
}

export default VideoContainer