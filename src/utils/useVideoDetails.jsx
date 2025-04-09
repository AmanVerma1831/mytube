import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_DETAILS_API } from './config';

const useVideoDetails = (videoId) => {

    const [videoDetails, setVideoDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchDetails = async () => {
            try {
                const data = await fetch(YOUTUBE_VIDEO_DETAILS_API + videoId);
                const json = await data?.json();
                // console.log(json);
                setVideoDetails(json?.items[0])
            } catch (error) {
                console.error("Error fetching videos:", error);
                setVideoDetails(null);
            } finally {
                setLoading(false);
            }
        }

        if (videoId) fetchDetails();
    }, [videoId])

    return { videoDetails, loading };
};

export default useVideoDetails;