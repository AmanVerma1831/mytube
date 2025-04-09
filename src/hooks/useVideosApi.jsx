import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/config';

const useVideosApi = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideosinfo();
    }, []);

    const getVideosinfo = async () => {
        try {
            const data = await fetch(YOUTUBE_VIDEOS_API);
            const json = await data?.json();
            console.log(json?.items);
            setVideos(json?.items || []);
        } catch (error) {
            console.error("Error fetching videos:", error);
            setVideos([]);
        }
    }

    return videos;
}

export default useVideosApi;