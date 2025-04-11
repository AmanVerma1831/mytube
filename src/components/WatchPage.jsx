import React from 'react'
import { useSearchParams } from 'react-router-dom';
import useVideosApi from '../hooks/useVideosApi';
import { Link } from 'react-router-dom';
import SuggestionBar from './SuggestionBar';
import Details from './Details';
import Shimmer from './Shimmer';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    // console.log("Watch Page : " + searchParams.get("v"));
    const videos = useVideosApi();

    return (videos?.length === 0) ? (<Shimmer />) : (
        <div className='md:ml-8'>
            <div className='md:flex'>
                <div className='md:flex md:w-[70%]'>
                    <div className='md:w-full md:p-2 md:mx-2'>
                        <iframe
                            className='h-56 sm:h-[450px] rounded-md shadow-lg w-full'
                            height="540" src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        >
                        </iframe>
                        <Details id={searchParams.get("v")} />
                    </div>
                </div>
                <div className='hidden md:block md:w-[30%]'>
                    <div className='mx-10'>
                        <p className='text-gray-600 text-md font-semibold p-2 my-2 bg-gray-200 rounded-md'>Suggestions</p>
                        {videos.map((video) => (
                            <Link to={"/watch?v=" + video.id}
                                className=''
                                key={video.id}
                            >
                                <SuggestionBar info={video} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchPage;