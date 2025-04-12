import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../redux/appSlice'
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import useSearch from '../hooks/useSearch';

const Header = () => {

    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState("");
    const [searchList, setSearchList] = useState(false);

    const suggestions = useSearch(searchQuery);

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='md:grid md:grid-cols-12 p-4 '>
            <section className='flex items-center col-span-2'>
                <div>
                    <GiHamburgerMenu className='hidden md:block h-6 w-auto cursor-pointer text-gray-600 mx-4'
                        onClick={() => toggleMenuHandler()}
                    />
                </div>
                <Link to="/" className='flex items-center text-xl'>
                    <FaYoutube className='text-red-500 w-8 h-auto' />
                    <span className='ml-1 font-bold text-shadow-lg'>MeTube</span>
                </Link>
            </section>
            <section className='hidden md:block md:col-span-8'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='w-full flex justify-center items-center'>
                        <input type='text'
                            className='w-1/2 border-1 border-gray-400 rounded-l-full px-5 py-2 
                            focus:border-blue-500 focus:outline-1 focus:outline-blue-500'
                            placeholder='Search'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setSearchList(true)}
                            onBlur={() => setSearchList(false)}
                        />
                        <button
                            className='bg-gray-200 border-1 border-gray-400 rounded-r-full px-4 py-2 hover:bg-gray-300'
                        >
                            <IoSearch className='h-6 w-auto text-gray-700' />
                        </button>
                    </div>
                    {searchList && <div className='relative w-full z-1'>
                        <div className='absolute left-1/2 -translate-x-[55%] w-1/2 p-4 bg-gray-50 border border-gray-100 shadow-xl rounded-xl'>
                            <ul className='space-y-2'>
                                {suggestions.map((s, i) => (
                                    <li key={i}
                                        className='flex items-center hover:bg-gray-200 p-2 rounded-lg cursor-pointer'>
                                        <IoSearch className='h-6 w-auto p-1 mr-2' />
                                        <p className='text-gray-700'>{s}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>}
                </div>
            </section>
            <section className='hidden md:block md:col-span-2'>
                <div className='w-1/2'></div>
                <div
                    className='flex justify-center items-center w-1/2 hover:text-white hover:bg-sky-600 
                    border text-sky-500 border-sky-500 rounded-full px-2 py-1 cursor-pointer'>
                    <HiOutlineUserCircle className='w-auto h-7 mr-1' />
                    <p className='font-semibold'>sign in</p>
                </div>
            </section>
        </div>
    )
}

export default Header