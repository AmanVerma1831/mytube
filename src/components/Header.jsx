import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../redux/appSlice'
import { Link } from 'react-router-dom';
import { Hamburger, Youtube, SearchIcon, UserIcon } from "../utils/config"
import useSearch from '../hooks/useSearch';

const Header = () => {

    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState("");
    const [searchList, setSearchList] = useState(false);

    const suggestions = useSearch(searchQuery);
    // console.log(suggestions);

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-cols-12 p-4 border-b-1 border-gray-200'>
            <section className='flex items-center col-span-1'>
                <img alt='ham-icon' src={Hamburger} className='h-7 cursor-pointer' onClick={() => toggleMenuHandler()} />
                <Link to="/">
                    <img alt='ham-icon' src={Youtube} className='h-6 mx-2' />
                </Link>
            </section>
            <section className='col-span-10'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='w-full flex justify-center items-center'>
                        <input type='text'
                            className='w-1/3 border-1 border-gray-400 rounded-l-full px-2 py-1 focus:border-blue-500 focus:outline-1 focus:outline-blue-500'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setSearchList(true)}
                            onBlur={() => setSearchList(false)}
                        />
                        <button
                            className='bg-gray-200 border-1 border-gray-400 rounded-r-full px-3 py-1 hover:bg-gray-300'
                        >
                            <img alt='search-icon' src={SearchIcon} className='h-6 p-1' />
                        </button>
                    </div>
                    {searchList && <div className='relative w-full z-1'>
                        <div className='absolute left-1/2 -translate-x-1/2 w-[37%] p-4 bg-gray-50 border border-gray-100 shadow-xl rounded-xl'>
                            <ul className='space-y-2'>
                                {suggestions.map((s, i) => (
                                    <li key={i}
                                        className='flex items-center hover:bg-gray-200 p-2 rounded-lg cursor-pointer'>
                                        <img alt='search-icon' src={SearchIcon} className='h-6 p-1 mr-2' />
                                        <p className='text-gray-700'>{s}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>}
                </div>
            </section>
            <section className=' col-span-1'>
                <div
                    className='flex justify-center border border-sky-500 rounded-full px-2 py-1 cursor-pointer'>
                    <img alt='user-icon' src={UserIcon} className='h-7 mr-1' />
                    <p className='font-semibold text-sky-500'>sign in</p>
                </div>
            </section>
        </div>
    )
}

export default Header