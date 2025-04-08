import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_DETAILS_API } from './config';

const useVideoDetails = (videoId) => {

    const [videoDetails, setVideoDetails] = useState(null);

    useEffect(() => {
        if (videoId) fetchDetails();
    }, [videoId])

    const fetchDetails = async () => {
        try {
            const data = await fetch(YOUTUBE_VIDEO_DETAILS_API + videoId);
            const json = await data?.json();
            console.log(json);
            setVideoDetails(json?.items[0])
        } catch (error) {
            console.error("Error fetching videos:", error);
            setVideoDetails(null);
        }
    }

    return videoDetails;
};

export default useVideoDetails;