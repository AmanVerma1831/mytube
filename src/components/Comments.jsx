import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";

const Comments = ({ data }) => {
    const [imageError, setImageError] = useState(false);
    const { authorDisplayName, textOriginal, authorProfileImageUrl } = data.topLevelComment.snippet;

    return (
        <div className='flex items-center p-2 m-2'>
            <div>
                {authorProfileImageUrl && !imageError ? (
                    <img
                        className='rounded-full w-10 h-10 object-cover'
                        src={authorProfileImageUrl}
                        onError={() => setImageError(true)}
                        alt={authorDisplayName}
                    />
                ) : (
                    <div className='rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center'>
                        <FaUser className='text-gray-500 text-xl' />
                    </div>
                )}
            </div>
            <div className='ml-2 pl-1'>
                <span className='font-semibold text-xs'>{authorDisplayName}</span>
                <p className='text-gray-700 text-md'>{textOriginal}</p>
            </div>
        </div>
    )
}

export default Comments;