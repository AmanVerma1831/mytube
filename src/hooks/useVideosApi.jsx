import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/config';

const useVideosApi = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideosinfo = async () => {
            try {
                const data = await fetch(YOUTUBE_VIDEOS_API);
                const json = await data?.json();
                setVideos(json?.items || []);
                // console.log(json?.items);
            } catch (error) {
                console.error("Error fetching videos:", error);
                setVideos([]);
            }
        }

        getVideosinfo();
    }, []);

    return videos;
}

export default useVideosApi;