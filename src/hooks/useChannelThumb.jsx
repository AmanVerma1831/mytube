import React, { useEffect, useState } from 'react'
import { YOUTUBE_CHANNEL_DP_API } from '../utils/config';

const useChannelThumb = (id) => {
    const [thumbnail, seThumbnail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getChannelThumbnail = async () => {
            try {
                const data = await fetch(YOUTUBE_CHANNEL_DP_API + id);
                const json = await data?.json();
                // console.log(json?.items);
                seThumbnail(json?.items?.[0]?.snippet?.thumbnails || null);
            } catch (error) {
                console.error("Error fetching videos:", error);
                seThumbnail(null);
            } finally {
                setLoading(false);
            }
        }

        if (id) getChannelThumbnail();
    }, [id]);

    return { thumbnail, loading };
}

export default useChannelThumb;