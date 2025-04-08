import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_COMMENTS } from './config';

const useVidComments = (id) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {

        const fetchComments = async () => {
            try {
                const response = await fetch(YOUTUBE_VIDEOS_COMMENTS + id);
                const data = await response?.json();
                setComments(data?.items || []);
            } catch (error) {
                console.error("Error fetching videos:", error);
                setComments([]);
            }
        }

        if (id) fetchComments();
    }, [id])

    return comments;
}

export default useVidComments;